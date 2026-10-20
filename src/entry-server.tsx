import { renderToString } from 'react-dom/server'
import { I18nextProvider } from 'react-i18next'
import App from './App'
import { createPortfolioI18n } from './i18n'

export async function render(language: 'es' | 'en') {
  const i18n = await createPortfolioI18n(language)
  return renderToString(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>,
  )
}
