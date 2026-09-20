// Uploads ./site to the Plesk (IIS) web root for tsebonexus.co.za over FTP/FTPS.
//
//   npm run deploy:live:list        connect, print the remote tree so you can find/confirm FTP_REMOTE_DIR
//   npm run deploy:live -- --dry-run  print the local files that would be uploaded, no connection
//   npm run deploy:live             wipe FTP_REMOTE_DIR and upload ./site
//
// Credentials come from ./.env (git-ignored). See .env.example for the variables.
import { Client } from 'basic-ftp'
import { existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const SITE_DIR = 'site'
// Plesk-managed entries in the web root that must survive a deploy.
const PRESERVE = new Set(['.user.ini', 'App_Data'])
const args = new Set(process.argv.slice(2))

if (existsSync('.env')) process.loadEnvFile('.env')

const required = ['FTP_HOST', 'FTP_USER', 'FTP_PASSWORD', 'FTP_REMOTE_DIR']
const missing = required.filter((k) => !process.env[k])
if (missing.length && !args.has('--dry-run')) {
  console.error(`Missing in .env: ${missing.join(', ')} (copy .env.example to .env)`)
  process.exit(1)
}

const cfg = {
  host: process.env.FTP_HOST,
  port: Number(process.env.FTP_PORT || 21),
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  secure: (process.env.FTP_SECURE ?? 'true') !== 'false', // explicit FTPS unless FTP_SECURE=false
  secureOptions: { rejectUnauthorized: false }, // Plesk boxes commonly run a self-signed FTPS cert
}
const remoteDir = process.env.FTP_REMOTE_DIR

function localFiles(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) out.push(...localFiles(p))
    else out.push(p)
  }
  return out
}

if (args.has('--dry-run')) {
  const files = localFiles(SITE_DIR)
  const bytes = files.reduce((n, f) => n + statSync(f).size, 0)
  for (const f of files) console.log(relative(SITE_DIR, f).split(sep).join('/'))
  console.log(`\n${files.length} files, ${(bytes / 1024 / 1024).toFixed(2)} MB -> ${cfg.host}:${remoteDir ?? '<FTP_REMOTE_DIR unset>'}`)
  process.exit(0)
}

const client = new Client(30_000)
client.ftp.verbose = args.has('--verbose')

async function printTree(path, depth) {
  const items = await client.list(path)
  for (const it of items) {
    console.log(`${'  '.repeat(depth)}${it.isDirectory ? '[d] ' : '    '}${it.name}${it.isDirectory ? '' : `  (${it.size} B)`}`)
    if (it.isDirectory && depth < 1) await printTree(`${path.replace(/\/$/, '')}/${it.name}`, depth + 1)
  }
}

try {
  await client.access(cfg)
  console.log(`Connected to ${cfg.host} as ${cfg.user} (${cfg.secure ? 'FTPS' : 'FTP'}), pwd=${await client.pwd()}`)

  if (args.has('--list')) {
    console.log('\n/ :')
    await printTree('/', 0)
    console.log(`\n${remoteDir} :`)
    await printTree(remoteDir, 0).catch((e) => console.log(`  (cannot list: ${e.message})`))
    process.exit(0)
  }

  // Paper trail of what was live before we wipe it.
  mkdirSync('scratch', { recursive: true })
  const before = await client.list(remoteDir)
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  writeFileSync(join('scratch', `remote-listing-${stamp}.txt`), before.map((i) => `${i.isDirectory ? 'd' : 'f'}\t${i.size}\t${i.name}`).join('\n'))
  console.log(`Remote ${remoteDir} currently has ${before.length} entries (saved to scratch/remote-listing-${stamp}.txt)`)

  // Remove the old site but leave what Plesk manages in the web root.
  await client.ensureDir(remoteDir)
  for (const it of before) {
    if (PRESERVE.has(it.name)) continue
    if (it.isDirectory) await client.removeDir(it.name)
    else await client.remove(it.name)
  }
  console.log('Removed old site files, uploading ./site ...')
  await client.uploadFromDir(SITE_DIR)
  const after = await client.list(remoteDir)
  console.log(`Done. Remote ${remoteDir} now has ${after.length} top-level entries.`)
} catch (err) {
  console.error('Deploy failed:', err.message)
  process.exitCode = 1
} finally {
  client.close()
}
