import { Inter } from 'next/font/google'
import './globals.css'
import { playfair_display } from './ui/fonts'

export const metadata = {
  title: 'Kush Dani',
  description: 'Generated by kuuuush',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair_display.className}>{children}</body>
    </html>
  )
}
