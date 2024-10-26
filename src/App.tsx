import './global.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { queryClient } from './lib/react-query'
import { QueryClientProvider } from '@tanstack/react-query'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | MBA Marketplace Admin" />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  )
}
