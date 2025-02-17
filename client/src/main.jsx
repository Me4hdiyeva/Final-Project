import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Helmet, HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </BrowserRouter>,
)
