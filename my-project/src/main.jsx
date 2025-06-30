import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let card = [
    {
      id:1,
      title:"WanderHub",
      para:"best movies you i have watched",
      rate:"⭐⭐⭐⭐"
    },
    {
      id:2,
      title:"Avatar",
      para:"best movies you i have watched",
      rate:"⭐⭐⭐"
    },
    {
      id:3,
      title:"Wednesday",
      para:"best movies you i have watched",
      rate:"⭐⭐⭐⭐⭐"
    },
   ]; 

createRoot(document.getElementById('root')).render(
    <App card={card}/>
)


