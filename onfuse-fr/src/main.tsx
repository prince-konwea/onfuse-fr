import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Receive from './components/receive.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Receive />
  </StrictMode>,
)
