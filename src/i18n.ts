import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  es: { translation: {
    nav: { projects: 'Proyectos', about: 'Sobre mí', contact: 'Contacto' },
    hero: { eyebrow: 'DESARROLLADOR SALESFORCE Y CREADOR WEB', hello: 'Hola, soy', intro: 'Convierto ideas en soluciones digitales útiles. Trabajo con Salesforce y disfruto creando proyectos web propios.', cta: 'Ver proyectos', location: 'DESDE ALCOBENDAS, MADRID' },
    work: { kicker: 'TRABAJO SELECCIONADO', title: 'Proyectos', intro: 'Herramientas, experimentos y proyectos compartidos que he creado fuera del día a día.', personal: 'PROYECTO PERSONAL', progress: 'EN DESARROLLO', collaboration: 'EN COLABORACIÓN', soon: 'Próximamente', visit: 'Visitar web', more: 'Otros proyectos y experimentos', all: 'Ver todos los repositorios', explore: 'Página de inicio Explore', worldMilestones: 'Hitos del mundo', artCollaboration: 'EN COLABORACIÓN' },
    projects: { sushi: 'Una forma divertida de contar sushi, consultar estadísticas y registrar la actividad en un calendario.', kahoot: 'Crea cuestionarios en grupo dentro de una sala compartida y expórtalos listos para Kahoot.', finance: 'Un espacio para explorar herramientas financieras. La aplicación todavía no está publicada.', yambo: 'Web para una asociación juvenil de Alcobendas, desarrollada junto a un amigo.', explore: 'Página de inicio personal con buscador y accesos rápidos.', minecraft: 'Sistema configurable de misiones y logros para Minecraft Fabric.', erp: 'Proyecto final de formación profesional; una muestra de mis primeros pasos.', php: 'Ejercicios de PHP realizados durante la formación profesional.' },
    artwork: { teamQuiz: 'CUESTIONARIO EN EQUIPO', question: '¿Quién ha enviado<br/>esta pregunta?', balance: 'Resumen de saldo', income: 'Ingresos', expenses: 'Gastos', youthAssociation: 'Asociación juvenil · Alcobendas' },
    about: { kicker: 'SOBRE MÍ', title: 'Código con intención', lead: 'Soy desarrollador Salesforce en BBVA Technology en Europa.', body: 'Desarrollo y mantengo soluciones para procesos comerciales con Apex, Aura, LWC y Flows. Me interesa el código bien pensado y seguir aprendiendo sobre arquitectura y diseño de soluciones. Fuera del trabajo, pruebo ideas propias en la web.', web: 'Proyectos web', more: 'Más sobre mi trayectoria' },
    certifications: { kicker: 'CERTIFICACIONES', title: 'Aprender, aplicar, crecer.', intro: 'Credenciales que respaldan mi experiencia en el ecosistema Salesforce.', name: 'Salesforce Certified Platform App Builder', issuer: 'Salesforce', earned: 'Obtenida en octubre de 2026', active: 'Certificación activa', open: 'Ver perfil Trailblazer', badgeAlt: 'Distintivo oficial Salesforce Certified Platform App Builder' },
    contact: { kicker: 'HABLEMOS', title: '¿Tienes una idea?', second: 'Conectemos.', lead: 'Puedes encontrarme en LinkedIn, Trailblazer o GitHub.' },
    tags: { Collaboration: 'Colaboración', Community: 'Comunidad' },
    footer: 'HECHO CON CURIOSIDAD Y CÓDIGO', back: 'Volver arriba', theme: 'Tema', system: 'Sistema', light: 'Claro', dark: 'Oscuro', menu: 'Abrir menú', closeMenu: 'Cerrar menú', navLabel: 'Navegación principal', languageLabel: 'Idioma'
  } },
  en: { translation: {
    nav: { projects: 'Projects', about: 'About me', contact: 'Contact' },
    hero: { eyebrow: 'SALESFORCE DEVELOPER AND WEB CREATOR', hello: "Hi, I'm", intro: 'I turn ideas into useful digital solutions. I work with Salesforce and enjoy building my own web projects.', cta: 'View projects', location: 'BASED IN ALCOBENDAS, MADRID' },
    work: { kicker: 'SELECTED PROJECTS', title: 'Projects', intro: 'Tools, experiments, and collaborative projects I have built outside my day job.', personal: 'PERSONAL PROJECT', progress: 'IN PROGRESS', collaboration: 'COLLABORATION', soon: 'Coming soon', visit: 'Visit site', more: 'Other projects and experiments', all: 'View all repositories', explore: 'Explore start page', worldMilestones: 'World Milestones', artCollaboration: 'COLLABORATION' },
    projects: { sushi: 'A fun way to count sushi, explore statistics, and track visits on a calendar.', kahoot: 'Create quizzes together in a shared room and export them ready to use in Kahoot.', finance: 'A collection of tools for exploring personal finance. The app has not been published yet.', yambo: 'A website for a youth association in Alcobendas, built with a friend.', explore: 'A personal start page with search and quick links.', minecraft: 'A configurable quest and achievement system for Minecraft Fabric.', erp: 'My vocational training capstone project, showing some of my early work.', php: 'PHP exercises I completed during vocational training.' },
    artwork: { teamQuiz: 'TEAM QUIZ', question: 'Who submitted<br/>this question?', balance: 'Balance overview', income: 'Income', expenses: 'Expenses', youthAssociation: 'Youth association · Alcobendas' },
    about: { kicker: 'ABOUT ME', title: 'Code with purpose', lead: 'I am a Salesforce developer at BBVA Technology in Europe.', body: 'I build and maintain solutions for business processes using Apex, Aura, LWC, and Flows. I care about thoughtful code and keep learning about architecture and solution design. Outside work, I experiment with my own ideas on the web.', web: 'Web projects', more: 'More about my experience' },
    certifications: { kicker: 'CERTIFICATIONS', title: 'Learn, build, grow.', intro: 'Credentials that support my experience in the Salesforce ecosystem.', name: 'Salesforce Certified Platform App Builder', issuer: 'Salesforce', earned: 'Earned October 2026', active: 'Active certification', open: 'View Trailblazer profile', badgeAlt: 'Official Salesforce Certified Platform App Builder badge' },
    contact: { kicker: 'SAY HELLO', title: 'Have an idea?', second: "Let's connect.", lead: 'Find me on LinkedIn, Trailblazer, or GitHub.' },
    tags: { Collaboration: 'Collaboration', Community: 'Community' },
    footer: 'MADE WITH CURIOSITY AND CODE', back: 'Back to top', theme: 'Theme', system: 'System', light: 'Light', dark: 'Dark', menu: 'Open menu', closeMenu: 'Close menu', navLabel: 'Main navigation', languageLabel: 'Language'
  } }
}

i18n.use(initReactI18next).init({ resources, lng: navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en', fallbackLng: 'es', interpolation: { escapeValue: false } })
export default i18n
