import Image from "next/image";
import Link from "next/link";
import React from "react";
import Styles from "./projects.module.css";
import Project from '@/getProjects/projects.json'

function Projects() {
  const datas = Project;
  return (
    <>
        <h1 className={Styles.h1}>LATEST PROJECTS</h1>

      <div className={Styles.contain}>
        {datas.map((data ,index)=> 
        <div key={index} className={Styles.project}>
          <div className={Styles.leftSide}>
            <div  className={Styles.blogPost}>
              <div className={Styles.title}>{data.title}</div>
              <div className={Styles.text}>
                <p>{data.text}</p>
              </div>
              <div className={Styles.links}>
                <Link href={`${data.repository}`}>
                  <div className={Styles.titlex}>Github Repository</div>
                </Link>
                <Link href={`${data.live}`}>
                  <div className={Styles.titley}>Live Demo</div>
                </Link>
              </div>
            </div>
          </div>
          <div className={Styles.rightSide}>
            <Link href={`${data.live}`}>
              <Image src={`${data.image}`} alt="qwe" width={450} height={400} />
            </Link>
          </div>
        </div>)}
      </div>
    </>
  );
}

export default Projects;
