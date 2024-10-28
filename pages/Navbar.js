import React ,{useRef} from 'react'
import styles from "@/styles/Navbar.module.css";
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from 'react';
const Navbar = () => {
  const [mobile, setMobile] = useState(false)
  const [sidebar, setSideBar] = useState(false)
  const sidebarRef = useRef(null);
  useEffect(() => {
    if (window.innerWidth < 1006) {
      setMobile(true)
    }
  }, [])
  useEffect(() => {
    console.log("mobile")
    console.log(window.innerWidth)
    const handleresize = () => {
      if (window.innerWidth < 1006) {
        setMobile(true)
      }
      else {
        setMobile(false)

      }
    }
    window.addEventListener("resize", handleresize)
    return () => {
      window.removeEventListener("resize", handleresize)
    }
  }, [])
    // Close sidebar on outside click
    useEffect(() => {
      const handleClickOutside = (event) => {
        console.log(sidebarRef)
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
          setSideBar(false);
        }
      };
  
      if (sidebar) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [sidebar]);
  return (
    <>
      <nav className={styles.mainnav}>
      {mobile && (
       <div className={styles.navbarhambergerAndClose}>
       {
         sidebar ? <IoMdClose color='white' size={25} onClick={() => setSideBar(!sidebar)} /> : <GiHamburgerMenu color='white' size={25} onClick={() => setSideBar(!sidebar)} />
       }
     </div>
     
        )}
        {!mobile && <ul>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skill</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#project">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>

        </ul>

        }
        <span className={styles.navBrand}>Portfolio</span>


      </nav>
      <div  ref={sidebarRef} className={sidebar ? `${styles.sidebar} ${styles.active}` : `${styles.sidebar}`}>
        <ul className={styles.sidebarUl}>
        <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skill</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#project">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar