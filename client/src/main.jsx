import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StatusContext from "./context/StatusContext.jsx";
import { Helmet, HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HelmetProvider>
    <StatusContext>
      <App />
    </StatusContext>
    </HelmetProvider>
  </BrowserRouter>,
)
