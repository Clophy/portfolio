import React from "react";
import Styles from "./footer.module.css";
import { FaPhoneSquareAlt,FaTwitter } from "react-icons/fa";
import {
  AiFillPlusCircle,
  AiOutlineCopyrightCircle,
  AiOutlineMail,
} from "react-icons/ai";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className={Styles.footer}>
        <div className={Styles.contain}>
          <div className={Styles.icon}>
            <FaPhoneSquareAlt />
            <div className={Styles.iconText}>
              <h3>Phone</h3>
              <p>+905456590165</p>
            </div>
          </div>
          <div className={Styles.icon}>
            <AiOutlineMail />
            <div className={Styles.iconText}>
              <h3>E-mail</h3>
              <p><Link href='mailto:barangenez@hotmail.com'>barangenez@hotmail.com</Link></p>
            </div>
          </div>
          <div className={Styles.icon}>
            <AiFillPlusCircle />
            <div className={Styles.iconText}>
              <h3>Follow Me</h3>
              <p><Link href="https://www.twitter.com/barangenez" alt="twitter" title="twitter"><FaTwitter/></Link></p>
            </div>
          </div>
          <div className={Styles.icon}>
            <AiOutlineCopyrightCircle />
            <div className={Styles.iconText}>
              <p>2023 &copy;</p>
              <p>Created by Baran Genez</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
