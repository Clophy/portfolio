"use client"
import React,{useState,useEffect} from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HomePage from "@/components/home";
import Blog from "@/components/blog";



export default function Home() {
  const [active, setActive] = useState(1)
  const [baran, setBaran] = useState(<HomePage/>)
  useEffect(() => {
   active === 1 && setBaran(<HomePage/>)
   active === 2 && setBaran(<Blog/>)
  },[active]);

  return (
    <>
    <Header active={active} setActive={setActive}/>
    {baran}
    <Footer/>

    </>
  )
}
