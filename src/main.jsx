import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import './styling/pokemoncolors.css'

import './css/cards.css'
import './css/filter.css'
import './css/list.css'
import './css/nav.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
