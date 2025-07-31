// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import Footer from './components/Footer'

export const metadata = {
  title: 'Jesus Antonio Rico – Portafolio',
  description: 'Portafolio profesional de un desarrollador Full Stack MERN con experiencia en Next.js.',
  keywords: ['portafolio', 'desarrollador web', 'MERN', 'Next.js', 'Tailwind'],
  authors: [{ name: 'TuNombreDev' }],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans bg-white text-gray-900 flex flex-col min-h-screen">
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )}