"use client"
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import Styles from './header.module.css'
import {GiHamburgerMenu} from "react-icons/gi"

function Header() {
 const [hamburger, setHamburger] = useState(false)
  const [blue , setBlue] = useState()
 useEffect(()=>{
  setBlue(globalThis.location.pathname)
 },[])
  
   return (
    <>
    
    <header className={Styles.header}>
        <div className={Styles.logo}>
            <div className={Styles.name}>Baran Genez</div>
            <div className={Styles.title}>Front-End Developer</div>
        </div>
        <nav className={Styles.navbar}>
              <div className={Styles.hamburger} onClick={()=> setHamburger(!hamburger)}><GiHamburgerMenu/></div>
            <ul className={`${hamburger ? "flex":"hidden"} `}>
                <li onClick={ () => {setBlue("/"); setHamburger(false)}} className={`${ blue === "/" && "text-[#61D0D4]"}`}><Link href="/" title='Home'>HOME</Link></li>
                <li onClick={() => {setBlue("/blog"); setHamburger(false)}} className={`${ blue === "/blog" && "text-[#61D0D4]"}`}><Link href="/blog" title='Blog'>BLOG</Link></li>
                <li onClick={() => {setBlue("/projects"); setHamburger(false)}} className={`${ blue === "/projects" && "text-[#61D0D4]"}`}><Link href="/projects" title='Projects'>PROJECTS</Link></li>
                {/* <li onClick={() => {setActive(4); setHamburger(false)}} className={`${active == 4 && "text-[#61D0D4]"}`}><Link href="/">SOME</Link></li> */}
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header