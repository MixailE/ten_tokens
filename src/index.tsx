import 'index.css'
import 'overlayscrollbars/overlayscrollbars.css'
import App from 'App'
import { CacheProvider } from '@rest-hooks/react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <CacheProvider>
    <App />
  </CacheProvider>
)
