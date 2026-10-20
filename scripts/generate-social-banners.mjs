import { access, mkdir } from 'node:fs/promises'
import sharp from 'sharp'

const width = 1200
const height = 630
const lime = '#d7fb55'
const pages = [
  {
    language: 'es',
    output: 'public/share/home-es.png',
    eyebrow: 'PORTFOLIO · SALESFORCE & WEB',
    name: 'Juan Cañas',
    role: ['Desarrollador Salesforce', 'y creador web'],
    description: 'Convierto ideas en soluciones digitales útiles.',
    location: 'ALCOBENDAS · MADRID',
    alt: 'Juan Cañas Cañete, desarrollador Salesforce y creador web',
  },
  {
    language: 'en',
    output: 'public/share/home-en.png',
    eyebrow: 'PORTFOLIO · SALESFORCE & WEB',
    name: 'Juan Cañas',
    role: ['Salesforce Developer', '& Web Creator'],
    description: 'I build useful digital experiences with Salesforce and the web.',
    location: 'ALCOBENDAS · MADRID',
    alt: 'Juan Cañas Cañete, Salesforce developer and web creator',
  },
]

function escapeXml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

function createArtwork(page) {
  const [roleLine1, roleLine2] = page.role
  return Buffer.from(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="#f8f7f3"/>
    <path d="M765 0h435v630H765z" fill="${lime}"/>
    <path d="M765 0h435v630H765z" fill="url(#grid)" opacity=".5"/>
    <defs><pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse"><path d="M42 0H0v42" fill="none" stroke="#263017" stroke-opacity=".12" stroke-width="1"/></pattern></defs>
    <circle cx="983" cy="315" r="240" fill="none" stroke="#253017" stroke-opacity=".2" stroke-width="1"/>
    <circle cx="983" cy="315" r="200" fill="none" stroke="#253017" stroke-opacity=".15" stroke-width="1"/>
    <rect x="788" y="86" width="362" height="458" rx="3" fill="#20251c" opacity=".18"/>
    <rect x="778" y="76" width="362" height="458" rx="3" fill="#fffdf8"/>
    <rect x="64" y="184" width="34" height="5" fill="${lime}"/>
    <text x="64" y="263" fill="#191a17" font-family="Arial, sans-serif" font-size="72" font-weight="700" letter-spacing="-3">${escapeXml(page.name)}</text>
    <text x="66" y="322" fill="#3f4934" font-family="Arial, sans-serif" font-size="30" font-weight="600">${escapeXml(roleLine1)}</text>
    <text x="66" y="361" fill="#3f4934" font-family="Arial, sans-serif" font-size="30" font-weight="600">${escapeXml(roleLine2)}</text>
    <text x="66" y="425" fill="#686b64" font-family="Arial, sans-serif" font-size="21">${escapeXml(page.description)}</text>
    <path d="M66 492h34" stroke="#a0c529" stroke-width="2"/>
    <text x="112" y="497" fill="#686b64" font-family="Arial, sans-serif" font-size="14" letter-spacing="2">${escapeXml(page.location)}</text>
    <text x="1040" y="577" fill="#263017" font-family="Arial, sans-serif" font-size="13" font-weight="700" letter-spacing="2">JCANAS.ES</text>
    <text x="64" y="578" fill="#92958d" font-family="Arial, sans-serif" font-size="12" letter-spacing="2">${escapeXml(page.eyebrow)}</text>
  </svg>`)
}

async function exists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

await mkdir('public/share', { recursive: true })

const hasPortrait = await exists('profile-photo.jpeg')
const logo = await sharp('public/favicon.png').resize(80, 80).png().toBuffer()

for (const page of pages) {
  const layers = [{ input: createArtwork(page) }, { input: logo, left: 64, top: 64 }]

  if (hasPortrait) {
    const portraitMask = Buffer.from('<svg width="342" height="434" xmlns="http://www.w3.org/2000/svg"><rect width="342" height="434" rx="2" fill="white"/></svg>')
    const portrait = await sharp('profile-photo.jpeg')
      .resize(342, 434, { fit: 'cover', position: 'attention' })
      .composite([{ input: portraitMask, blend: 'dest-in' }])
      .png()
      .toBuffer()
    layers.push({ input: portrait, left: 788, top: 88 })
  }

  await sharp({ create: { width, height, channels: 4, background: '#f8f7f3' } })
    .composite(layers)
    .png({ compressionLevel: 9 })
    .toFile(page.output)
}
