// import { Inter } from 'next/font/google'
import './components/globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IDerevianskii',
  description: 'About me',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  )
}
