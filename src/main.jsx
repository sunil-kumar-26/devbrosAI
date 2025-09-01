import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Info from './pages/Info.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Hero from './pages/Hero.jsx';
import AIChat from './pages/AIChat.jsx'
const myrouter=createBrowserRouter([
{path:'/',
element:<App/>
},
{
path:'/user/chatbot',
element:<AIChat/>
}
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={myrouter}>
  <App />
    </RouterProvider>
    
)
