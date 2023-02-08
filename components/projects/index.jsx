import Image from "next/image";
import Link from "next/link";
import React from "react";
import Styles from "./projects.module.css";

function Projects() {
  return (
    <>
      <div className={Styles.contain}>
        <h1 className={Styles.h1}>LATEST PROJECTS</h1>

        <div className={Styles.project}>
          <div className={Styles.leftSide}>
            <div className={Styles.blogPost}>
              <div className={Styles.title}>Country Api</div>
              <div className={Styles.text}>
                <p>Merhaba, frontendmentor.io&apos;dan bir api projesi yaptim. İlk
                tailwindcss kullanarak geliştirdiğim proje oldu kendisi. Yine bu
                projede ilk defa Dark Mode ve Filtreleme özelliği kullandim.
                Selectbox özelleştirme kisminda çok zorlandim ve bir sonraki
                projemde bununla ilgili bir çalişma yapmak isterim.</p>
              </div>
              <div className={Styles.links}>
                <Link href="https://countries-front-end-mentor.vercel.app/">
                  <div className={Styles.titlex}>Github Repository</div>
                </Link>
                <Link href="https://countries-front-end-mentor.vercel.app/">
                  <div className={Styles.titley}>Live Demo</div>
                </Link>
              </div>
            </div>
          </div>
          <div className={Styles.rightSide}>
            <Link href="https://countries-front-end-mentor.vercel.app/">
              <Image src="/project.jpg" alt="qwe" width={450} height={400} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
