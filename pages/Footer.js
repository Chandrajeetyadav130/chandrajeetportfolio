import React from 'react'
import styles from "@/styles/Footer.module.css";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <h1 className={styles.FooterName}>Chandrajeet Yadav</h1>
       <div className={styles.footercontent}>
       <Link className={styles.footerLink} href={"https://github.com/Chandrajeetyadav130"} alt="github">Github</Link>
        
       <span> © 2024 Chandrajeet Yadav All Rights Preserved</span>
        
        </div>
       <div>
       </div>
    
    </footer>
  )
}

export default Footer