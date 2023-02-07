import React from "react";
import Styles from "./blog.module.css";
 import {BsExclamationLg} from 'react-icons/bs'
 import {TfiWorld} from 'react-icons/tfi'


function Blog() {
  return (
    <>
      <div className={Styles.contain}>
        <h1>BLOG PAGE</h1>
        <div className={Styles.leftSide}>
          <div className={Styles.blogPost}>
            <div className={Styles.title}>Professional Info</div>
            <div className={Styles.text}>
              Merhabalar ben Baran Genez. Sinop Üniversitesi İşletme Bölümü
              mezunuyum. 2022 kasım ayında bilgisayar başına oturdum ve
              front-end developer olmaya karar verdim. Gördüğüm web sitesini
              html, css, tailwind, javascript, react ve next js kullanarak
              oluşturabilirim. Bu alanda gelişebileceğim kendime bir şeyler
              katabileceğim ve çalıştığım yerde direkt projelere yardım
              edebileceğim veya projelerin süreçlerine etki edebileceğim iş
              tekliflerine açığım.
              
            </div>
          </div>
        </div>
        <div className={Styles.rightSide}>
          <div className={Styles.rightBox}>
          <div className={Styles.rightTitle}>
          <div className={Styles.icon}><BsExclamationLg/> </div>
          <div className={Styles.rightText}>Skill</div>
          </div>
          <div className={Styles.skills}>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>React</li>
              <li>NextJs</li>
              <li>Tailwind</li>
            </ul>
          </div>
          </div>
          <div className={Styles.rightBox}>
          <div className={Styles.rightTitle}>
          <div className={Styles.icon}><TfiWorld/></div>
          <div className={Styles.rightText}>Languages</div>
          </div>
          <div className={Styles.skills}>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>React</li>
              <li>NextJs</li>
              <li>Tailwind</li>
            </ul>
          </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
}

export default Blog;
