import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/global.css'
import {Noticia_Text} from '@next/font/google'

const notic = Noticia_Text({subsets:["latin"], weight:["400","700"]})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head />
      <body className={notic.className}>
      <Header/>
      <main>
      {children}
      </main>
      <Footer/>
      </body>
    </html>
  )
}
