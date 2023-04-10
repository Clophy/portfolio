"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Styles from "./home.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";

function HomePage() {
  return (
    <>
      <div className={Styles.contain}>
        <div className={Styles.photo}>
          <Image src="/me.jpg" priority width={400} height={400} alt="baran genez" />
        </div>
        <div className={Styles.info}>
          <h1>Hello,</h1>
          <h2>a bit about me:</h2>
          <div className={Styles.links}>
            <div>
              <Link href="https://github.com/Clophy" rel="nofollow"  title="github">
                <FaGithub />
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/in/baran-genez-ba759419a/" rel="nofollow" title="linkedin">
                <FaLinkedin />
              </Link>
            </div>
            <div>
              <Link href="https://www.twitter.com/barangenez" rel="nofollow" title="twitter">
                <FaTwitter />
              </Link>
            </div>
            {/* <div><Link href="/"><FaTwitch/></Link></div>
            <div><Link href="/"><FaYoutube/></Link></div> */}
            {/* <div className={Styles.email}><Link href="mailto:barangenez@hotmail.com">Email</Link></div> */}
          </div>
          <p className={Styles.paragraph}>
            Merhabalar ben <strong>Baran Genez</strong>. Sinop Üniversitesi
            İşletme Bölümü mezunuyum. Yazılıma büyük bi ilgim bulunuyordu ve Front-end developer olmaya karar verdim.
            Gördüğüm web sitesini html, css, tailwind, javascript, react ve next js
            kullanarak oluşturabilirim. Bu alanda gelişebileceğim kendime bir
            şeyler katabileceğim ve çalıştığım yerde direkt projelerin süreçlerine etki edebileceğim iş aramaktayım.
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
