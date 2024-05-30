// import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import './components/globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IDerevianskii',
  description: 'Have a good day. My name is Igor Derevianskii, I specialize in professionally creating user interface design and development. Throughout my professional career, I have designed numerous products, with some of them becoming flagship products for companies. My experience primarily focuses on visually processing big volumes of data, as I have dedicated a significant portion of my professional activity to the financial sector. My work involves turning complex into straightforward ones. I have been in the industry for over 13 years and hold a Bachelor of Computer Science degree, which allows me to delve deeper into the technical aspects of products. Additionally, I am proficient in product development as a software engineer. If you are interested in my experience, then contact me.',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  )
}
