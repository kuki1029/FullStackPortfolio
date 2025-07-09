import { createBrowserRouter, RouterProvider, Navigate } from 'react-router'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import FreelancePage from 'components/FreelancePage'
import { DevPage } from 'components/DevPage'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

const router = createBrowserRouter([
  {
    path: '*',
    element: <Navigate to="/" />
  },
  {
    path: '/',
    element: <FreelancePage />
  },
  {
    path: '/dev',
    element: <DevPage />
  }
])

root.render(<RouterProvider router={router} />)
