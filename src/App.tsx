import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './i18n'

type Theme = 'system' | 'light' | 'dark'
const items = [
  { id: 'sushi', name: 'Sushi Counter', type: 'personal', url: 'https://sushi-counter.jcanas.es/', github: 'https://github.com/unjuannito/sushi-counter', tags: ['Full stack', 'React', 'TypeScript'] },
  { id: 'kahoot', name: 'Kahoot Builder', type: 'personal', url: 'https://kahoot-builder.jcanas.es/', github: 'https://github.com/unjuannito/kahoot-builder', tags: ['React', 'TypeScript', 'Collaboration'] },
  { id: 'finance', name: 'Finance Tools', type: 'progress', url: '', github: 'https://github.com/unjuannito/finance-tools', tags: ['React Router', 'TypeScript', 'Tailwind'] },
  { id: 'yambo', name: 'Yambo', type: 'collaboration', url: 'https://yambo.cabrasky.net/', github: '', tags: ['Web', 'Community', 'Collaboration'] },
] as const

function Arrow() { return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg> }

function Art({ id }: { id: string }) {
  const { t } = useTranslation()
  return <div className={`art art-${id}`}>
    <div className="browser-dots"><i/><i/><i/></div>
    {id === 'sushi' && <div className="art-window sushi-window"><span className="sushi-icon">🍣</span><strong>08<span> / 12</span></strong><div className="sushi-bars"><i/><i/><i/><i/><i/><i/><i/></div></div>}
    {id === 'kahoot' && <div className="art-window kahoot-window"><small>{t('artwork.teamQuiz')}</small><strong>{t('artwork.question')}</strong><div className="answers"><i>A · Marta</i><i>B · Diego</i><i>C · Alex</i><i>D · Sofía</i></div></div>}
    {id === 'finance' && <div className="art-window finance-window"><div className="finance-top">{t('artwork.balance')} <span>↗ +12.8%</span></div><strong>€ 24,580<span>.00</span></strong><div className="bars">{[28,38,34,48,62,55,45,68,59,73,80,94].map((n,i)=><i key={i} style={{height:`${n}%`}}/>)}</div><div className="finance-bottom"><span>{t('artwork.income')} <b>€ 4,250</b></span><span>{t('artwork.expenses')} <b>€ 1,870</b></span></div></div>}
    {id === 'yambo' && <><div className="orb orb-one"/><div className="orb orb-two"/><div className="art-window yambo-window"><small>YAMBO</small><strong>{t('artwork.yamboMotto')}</strong><span>{t('artwork.youthAssociation')}</span></div></>}
    <div className="art-label">{id === 'yambo' ? t('work.artCollaboration') : id.toUpperCase()}</div>
  </div>
}

function App() {
  const { t, i18n } = useTranslation()
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('portfolio-theme') as Theme) || 'system')
  const [menu, setMenu] = useState(false)
  const [more, setMore] = useState(false)
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const apply = () => document.documentElement.classList.toggle('dark', theme === 'dark' || (theme === 'system' && query.matches))
    apply()
    query.addEventListener('change', apply)
    return () => query.removeEventListener('change', apply)
  }, [theme])
  useEffect(() => { document.documentElement.lang = i18n.language }, [i18n.language])
  const changeTheme = () => {
    const next = theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system'
    setTheme(next)
    localStorage.setItem('portfolio-theme', next)
  }
  return <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] transition-colors duration-300">
    <header className="header"><div className="shell header-inner">
      <a className="brand" href="#inicio" aria-label="Juan Cañas, inicio"><strong>JC<span>.</span></strong><small>JUAN CAÑAS</small></a>
      <nav className={menu ? 'nav open' : 'nav'} aria-label={t('navLabel')}><a href="#proyectos" onClick={()=>setMenu(false)}>{t('nav.projects')}</a><a href="#sobre-mi" onClick={()=>setMenu(false)}>{t('nav.about')}</a><a href="#contacto" onClick={()=>setMenu(false)}>{t('nav.contact')}</a></nav>
      <div className="header-controls"><div className="language" aria-label={t('languageLabel')}><button className={i18n.language==='es'?'selected':''} aria-pressed={i18n.language==='es'} onClick={()=>i18n.changeLanguage('es')}>ES</button><span>/</span><button className={i18n.language==='en'?'selected':''} aria-pressed={i18n.language==='en'} onClick={()=>i18n.changeLanguage('en')}>EN</button></div><button className="theme-button" onClick={changeTheme} aria-label={`${t('theme')}: ${t(theme)}`} title={`${t('theme')}: ${t(theme)}`}>{theme==='system'?'▣':theme==='light'?'☼':'☾'}</button><button className="menu-button" aria-label={t(menu?'closeMenu':'menu')} aria-expanded={menu} onClick={()=>setMenu(!menu)}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">{menu?<path d="m6 6 12 12M18 6 6 18"/>:<path d="M4 7h16M4 12h16M4 17h16"/>}</svg></button></div>
    </div></header>
    <main>
      <section id="inicio" className="shell hero"><div className="hero-content"><div className="eyebrow"><i/>{t('hero.eyebrow')}</div><h1>{t('hero.hello')}<br/><span>Juan Cañas.</span></h1><p>{t('hero.intro')}</p><div className="hero-actions"><a className="primary-button" href="#proyectos">{t('hero.cta')} <Arrow/></a><a className="text-button" href="https://www.linkedin.com/in/juan-canas-canete/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><div className="hero-location"><i/>{t('hero.location')}</div></div><div className="hero-art" aria-hidden="true"><div className="hero-grid"/><div className="circle outer"/><div className="circle inner"/><div className="monogram">J<span>C</span></div><div className="code-sticker">&lt; build something meaningful /&gt;</div><span className="sparkle spark-one">✳</span><span className="sparkle spark-two">✳</span><span className="vertical-label">DESARROLLO · DISEÑO · IDEAS</span></div></section>
      <div className="ticker" aria-hidden="true"><div>SALESFORCE <b>✳</b> APEX <b>✳</b> LIGHTNING WEB COMPONENTS <b>✳</b> REACT <b>✳</b> TYPESCRIPT <b>✳</b> SALESFORCE <b>✳</b> APEX <b>✳</b> LIGHTNING WEB COMPONENTS <b>✳</b> REACT <b>✳</b> TYPESCRIPT <b>✳</b></div></div>
      <section id="proyectos" className="shell section projects"><div className="section-heading"><div><div className="kicker">01 / {t('work.kicker')}</div><h2>{t('work.title')}<span>.</span></h2></div><p>{t('work.intro')}</p></div><div className="project-grid">{items.map((item,i)=><article className="project" key={item.id}><a href={item.url||item.github} target="_blank" rel="noreferrer" aria-label={t(`projectNames.${item.id}`, { defaultValue: item.name })}><Art id={item.id}/></a><div className="project-meta"><span>0{i+1} / {t(`work.${item.type}`)}</span><span>↗</span></div><div className="project-name"><h3>{t(`projectNames.${item.id}`, { defaultValue: item.name })}</h3>{item.type==='progress'&&<span>{t('work.soon')}</span>}</div><p>{t(`projects.${item.id}`)}</p><div className="project-foot"><div className="tags">{item.tags.map(tag=><span key={tag}>{t(`tags.${tag}`, { defaultValue: tag })}</span>)}</div><div className="project-links">{item.url&&<a href={item.url} target="_blank" rel="noreferrer">{t('work.visit')} ↗</a>}{item.github&&<a href={item.github} target="_blank" rel="noreferrer">GitHub ↗</a>}</div></div></article>)}</div><div className="more"><button onClick={()=>setMore(!more)} aria-expanded={more}>{t('work.more')}<span>{more?'−':'+'}</span></button>{more&&<div className="more-list">{[
        [t('work.explore'),t('projects.explore'),'https://explore.jcanas.es/'],
        [t('work.worldMilestones'),t('projects.minecraft'),'https://github.com/unjuannito/world-milestones'],
        [t('work.all'),'GitHub / unjuannito','https://github.com/unjuannito?tab=repositories']
      ].map(([name,description,url])=><a href={url} target="_blank" rel="noreferrer" key={name}><strong>{name}</strong><span>{description}</span><b>↗</b></a>)}</div>}</div></section>
      <section id="sobre-mi" className="about"><div className="shell about-grid"><div><div className="kicker">02 / {t('about.kicker')}</div><h2>{t('about.title')}<span>.</span></h2><div className="about-asterisk" aria-hidden="true">✳</div></div><div className="about-body"><p className="lead">{t('about.lead')}</p><p>{t('about.body')}</p><div className="facts"><div><small>01</small><strong>Salesforce</strong><span>Apex · Aura · LWC · Flows</span></div><div><small>02</small><strong>{t('about.web')}</strong><span>React · TypeScript · UI</span></div></div><a href="https://www.linkedin.com/in/juan-canas-canete/" target="_blank" rel="noreferrer">{t('about.more')} <Arrow/></a></div></div></section>
      <section id="certificaciones" className="certifications"><div className="shell"><div className="kicker">03 / {t('certifications.kicker')}</div><div className="certification-layout"><div className="certification-heading"><h2>{t('certifications.title')}</h2><p>{t('certifications.intro')}</p></div><article className="certification-card"><div className="certification-badge"><img src="https://image.mail.salesforce.com/lib/fe961c727460077877/m/1/2021-03_Badge_SF-Certified_Platform-App-Builder_High-Res.png" alt={t('certifications.badgeAlt')} loading="lazy"/></div><div className="certification-details"><div className="certification-status"><span className="status-check">✓</span>{t('certifications.active')}</div><h3>{t('certifications.name')}</h3><p>{t('certifications.issuer')} <span>·</span> {t('certifications.earned')}</p><a href="https://www.salesforce.com/trailblazer/juan-canas-canete" target="_blank" rel="noreferrer">{t('certifications.open')} <span>↗</span></a></div><div className="certification-index">SF / 001</div></article></div></div></section>
      <section id="contacto" className="shell section contact"><div className="kicker">04 / {t('contact.kicker')}</div><div className="contact-grid"><div><h2>{t('contact.title')}<br/><span>{t('contact.second')}</span></h2><p>{t('contact.lead')}</p></div><div className="contact-links"><a href="https://www.linkedin.com/in/juan-canas-canete/" target="_blank" rel="noreferrer"><span className="contact-icon">in</span> LinkedIn <span>↗</span></a><a href="https://www.salesforce.com/trailblazer/juan-canas-canete" target="_blank" rel="noreferrer"><span className="contact-icon trailblazer-icon">☁</span> Trailblazer <span>↗</span></a><a href="https://github.com/unjuannito" target="_blank" rel="noreferrer"><span className="contact-icon">⌘</span> GitHub <span>↗</span></a></div></div></section>
    </main><footer><div className="shell"><span>© {new Date().getFullYear()} Juan Cañas Cañete</span><span>{t('footer')}</span><a href="#inicio">{t('back')} ↑</a></div></footer>
  </div>
}
export default App
