import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Info from './pages/Info.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Hero from './pages/Hero.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
