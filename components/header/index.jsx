"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import Styles from './header.module.css'
import {GiHamburgerMenu} from "react-icons/gi"


function Header() {
 const [hamburger, setHamburger] = useState(false)
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
                <li><Link href="https://www.google.com">HOME</Link></li>
                <li><Link href="/">OTHER</Link></li>
                <li><Link href="/">ANOTHER</Link></li>
                <li><Link href="/">SOME</Link></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header