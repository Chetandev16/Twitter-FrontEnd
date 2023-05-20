import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Toaster } from 'react-hot-toast'

import { QueryClientProvider,QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const inter = Inter({
  subsets: ['latin']
})

// const quickSand = Quicksand({
//   subsets: ['latin']
// })
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return <div className={inter.className}>
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId='1099211814113-hnbrg0oa5ra82nj3c741euk2mml1o6f5.apps.googleusercontent.com'>
        <Component {...pageProps} />
        <Toaster />
        <ReactQueryDevtools/>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  </div>
}
