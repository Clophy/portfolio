"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import Styles from './header.module.css'
import {GiHamburgerMenu} from "react-icons/gi"


function Header() {
 const [hamburger, setHamburger] = useState(false)
 const [active, setActive] = useState(1)
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
                <li onClick={() => setActive(1)} className={`${active == 1 && "text-[#61D0D4]"}`}><Link href="/">HOME</Link></li>
                <li onClick={() => setActive(2)} className={`${active == 2 && "text-[#61D0D4]"}`}><Link href="/">OTHER</Link></li>
                <li onClick={() => setActive(3)} className={`${active == 3 && "text-[#61D0D4]"}`}><Link href="/">ANOTHER</Link></li>
                <li onClick={() => setActive(4)} className={`${active == 4 && "text-[#61D0D4]"}`}><Link href="/">SOME</Link></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header