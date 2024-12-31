import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App"
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { AuthContextProvider } from './context/AuthContext';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
    <App /> 
    </AuthContextProvider>
  </StrictMode>,
)
