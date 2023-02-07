import React from "react";
import '@/styles/global.css'
import {Noticia_Text} from '@next/font/google'

const notic = Noticia_Text({subsets:["latin"], weight:["400","700"]})

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      
      <head />
      <body className={notic.className}>
      <main>
      {children}
      </main>
      </body>
    </html>
  )
}
