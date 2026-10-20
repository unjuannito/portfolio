import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'

const template = await readFile('dist/index.html', 'utf8')
const serverFiles = await readdir('dist-ssr')
const serverEntry = serverFiles.find((file) => file.startsWith('entry-server.') && file.endsWith('.js'))
if (!serverEntry) throw new Error('No se ha encontrado el bundle de prerenderizado.')
const { render } = await import(pathToFileURL(`${process.cwd()}/dist-ssr/${serverEntry}`).href)

const pages = [
  {
    language: 'es',
    path: 'dist/index.html',
    title: 'Juan Cañas — Desarrollador Salesforce y creador web',
    description: 'Portfolio de Juan Cañas Cañete, desarrollador Salesforce y creador de proyectos web en Madrid.',
    socialImage: 'https://jcanas.es/share/home-es.png',
    socialImageAlt: 'Juan Cañas Cañete, desarrollador Salesforce y creador web',
    locale: 'es_ES',
  },
  {
    language: 'en',
    path: 'dist/en/index.html',
    title: 'Juan Cañas — Salesforce Developer & Web Creator',
    description: 'Portfolio of Juan Cañas Cañete, Salesforce developer and web creator based in Madrid.',
    socialImage: 'https://jcanas.es/share/home-en.png',
    socialImageAlt: 'Juan Cañas Cañete, Salesforce developer and web creator',
    locale: 'en_US',
  },
]

for (const page of pages) {
  const canonical = `https://jcanas.es${page.language === 'en' ? '/en/' : '/'}`
  const html = template
    .replace('<html lang="es">', `<html lang="${page.language}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${page.description}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${page.title}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${page.description}" />`)
    .replace(/<meta property="og:locale" content="[^"]*"\s*\/>/, `<meta property="og:locale" content="${page.locale}" />`)
    .replace(/<meta property="og:image" content="[^"]*"\s*\/>/, `<meta property="og:image" content="${page.socialImage}" />`)
    .replace(/<meta property="og:image:alt" content="[^"]*"\s*\/>/, `<meta property="og:image:alt" content="${page.socialImageAlt}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${page.title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${page.description}" />`)
    .replace(/<meta name="twitter:image" content="[^"]*"\s*\/>/, `<meta name="twitter:image" content="${page.socialImage}" />`)
    .replace(/<meta name="twitter:image:alt" content="[^"]*"\s*\/>/, `<meta name="twitter:image:alt" content="${page.socialImageAlt}" />`)
    .replace('</head>', [
      '<link rel="alternate" hreflang="es" href="https://jcanas.es/" />',
      '<link rel="alternate" hreflang="en" href="https://jcanas.es/en/" />',
      '<link rel="alternate" hreflang="x-default" href="https://jcanas.es/" />',
      '<script type="application/ld+json">{"@context":"https://schema.org","@type":"ProfilePage","name":"Juan Cañas — Salesforce Developer & Web Creator","url":"https://jcanas.es/","mainEntity":{"@type":"Person","name":"Juan Cañas Cañete","url":"https://jcanas.es/","jobTitle":"Salesforce Developer","sameAs":["https://www.linkedin.com/in/juan-canas-canete/","https://github.com/unjuannito","https://www.salesforce.com/trailblazer/juan-canas-canete"]}}</script>',
      '</head>',
    ].join('\n'))
    .replace('<div id="root"></div>', `<div id="root">${await render(page.language)}</div>`)

  await mkdir(page.path.slice(0, page.path.lastIndexOf('/')), { recursive: true })
  await writeFile(page.path, html)
}
