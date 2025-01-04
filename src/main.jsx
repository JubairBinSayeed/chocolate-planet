import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import { Toaster } from 'react-hot-toast'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-sourGummy' >
    <RouterProvider router={router}></RouterProvider>
    <Toaster
       position="top-right"
       reverseOrder={false}
    />
    </div>
  </StrictMode>,
)