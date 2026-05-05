// Resolves public/ asset paths correctly in both dev and GitHub Pages deployment
export const asset = (filename) => `${import.meta.env.BASE_URL}${filename}`

// Replace with actual WhatsApp number before go-live (e.g. '27821234567')
export const WHATSAPP_NUMBER = '27XXXXXXXXXX';

export const WA_REVIEW_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27d%20like%20a%20free%20cyber%20security%20review%20for%20my%20business`;

export const WA_HELP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20cybersecurity%20solution`;

export const WA_SHOP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20purchasing%20a%20Bitdefender%20license`;
