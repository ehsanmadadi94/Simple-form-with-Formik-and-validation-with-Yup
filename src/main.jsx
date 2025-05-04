import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { setLocale } from 'yup'

setLocale({
  mixed:{
    required: ({path})=>`الزامی است ${path} وارد کردن فیلد `
  },
  string :{
    min : ({min , path})=>`کاراکتر است ${path} ${min} حداقل طول فیلد`
  }
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
