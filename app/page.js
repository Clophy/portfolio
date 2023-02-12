"use client"
import React,{useState,useEffect} from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HomePage from "@/components/home";
import Blog from "@/components/blog";
import Projects from "@/components/projects";
import Script from "next/script";



export default function Home() {
  const [active, setActive] = useState(1)
  const [baran, setBaran] = useState(<HomePage/>)
  useEffect(() => {
   active === 1 && setBaran(<HomePage/>)
   active === 2 && setBaran(<Blog/>)
   active === 3 && setBaran(<Projects/>)
  },[active]);

  return (
    <>
    <Header active={active} setActive={setActive}/>

    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3KN9FKWZCV"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3KN9FKWZCV');
        `}
      </Script>
   
    {baran}
    <Footer/>

    </>
  )
}
