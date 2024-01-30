import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import 'reset-css'
import './styles/main.css'
import './styles/inputs.css'
import './styles/buttons.css'
import './styles/resume.css'
import './styles/print.css'
import './styles/media.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
)
