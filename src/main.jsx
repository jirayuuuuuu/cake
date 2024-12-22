import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Home from './Pages/Home';
import Product from './Pages/Product';
import About from './Pages/About';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <About/>
    <Product/>
  </StrictMode>,
)
