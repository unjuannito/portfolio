import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import './index.css'
import App from './App.tsx'
import { createPortfolioI18n } from './i18n.ts'

const language = window.location.pathname.startsWith('/en/') ? 'en' : 'es'

createPortfolioI18n(language).then((i18n) => {
  hydrateRoot(
    document.getElementById('root')!,
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </StrictMode>,
  )
})
