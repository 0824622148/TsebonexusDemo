# Tsebo Nexus website

Static single-page site for **https://tsebonexus.co.za** (live since 20 Sep 2026). `site/` is the whole
deployable: a Claude Design static export (`index.html` + `support.js`/`image-slot.js` runtime), optimised
images in `uploads/`, partner logos in `assets/`, favicon set, `manifest.json` and an IIS `web.config`.

The previous React/Vite site was retired at go-live; it is in git history up to commit `884df4c`.

## Working on the site

```sh
npm install
npm run serve          # http://localhost:3000 — static preview of ./site
```

Edit `site/index.html` directly. Contact details live in three places: the three "Free Review" buttons
(WhatsApp `wa.me/27693389748`), the line under the CTA heading, and the footer (`tel:` / `mailto:`).

Keep `site/.image-slots.state.json` (`{}`) — the image runtime fetches it on boot and logs a 404 if
it is missing.

## Insights articles

Articles live at `site/insights/<slug>/index.html` with a listing at `site/insights/index.html`; all share
`site/insights/article.css` and are plain HTML (no `support.js` runtime). Each page carries its own
title/description/canonical/OG tags, Article JSON-LD, numbered `[n]` citations that link to a References
list, a "How Tsebo Nexus helps" callout and the free-review CTA. Every statistic must trace to a URL in that
article's References list.

To add an article: copy an existing folder, use the card image from `site/uploads/`, add the card to
`site/insights/index.html` and to the `#insights` section of `site/index.html`, and add the URL to
`site/sitemap.xml`.

## Deploying

### Live (Plesk / IIS at hostserv.co.za)

Credentials go in `.env` (git-ignored) — copy `.env.example`. The FTP account is chrooted straight
into the tsebonexus.co.za web root, so `FTP_REMOTE_DIR=/`.

```sh
npm run deploy:live:list           # connect and print the remote tree (read-only)
npm run deploy:live -- --dry-run   # list what would be uploaded, no connection
npm run deploy:live                # remove old site files (keeps Plesk's .user.ini + App_Data), upload ./site
```

Each deploy writes a listing of the previous remote contents to `scratch/` (git-ignored).

`site/web.config` is the Plesk-generated file (custom error pages, ASP.NET temp dir) with the static-site
settings added at the top: default document, `.json`/`.svg` MIME types, 7-day asset cache
(10 minutes for `index.html`), `nosniff` and `Referrer-Policy` headers. If Plesk regenerates
`web.config` on the server, re-merge rather than overwrite.

### Demo (GitHub Pages)

`npm run deploy:demo` publishes the same `site/` folder to https://0824622148.github.io/TsebonexusDemo/.

## Hosting notes

- **SSL**: at go-live the domain was serving Plesk's default self-signed certificate (expired 2020).
  Install a free Let's Encrypt certificate in Plesk (Websites & Domains → tsebonexus.co.za →
  SSL/TLS Certificates), covering `www` as well, then enable the HTTP→HTTPS redirect + HSTS.
- HTTP already 301s to HTTPS at the Plesk level; no rewrite rule is needed in `web.config`.
