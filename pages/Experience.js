import React from 'react'
import styles from "@/styles/Experience.module.css";

const Experience = () => {
  return (
    <section id="experience">
      <h2 className={styles.heading}>Experience</h2>
      <h3 className={styles.subHead}>My work experience as a software engineer and working on different companies and projects.</h3>
      <div className={styles.expreience_company_continer}>
        <div className={styles.firstCompDiv}>
          <h5 className={styles.subHead}>Selnox infotech pvt.ltd Bhopal Madhaya Pradesh<span className={styles.exp_date}>01/04/2024 – 12/05/2025
          </span></h5>
          <p className={styles.subHead}>• Enhanced user experiences on figma Application by resolving bugs & reduced load time by 40%. Building Sigma Application using React Js with seamless interaction of REST APIs using AXIOS optimized with React Redux. Refactored previous code to Javascript.</p>
          <div className={styles.subHead}>

            Skills: • JavaScript  • TypeScript • ReactJS • Redux • NodeJs • Material UI • HTML • CSS • Tailwind CSS • Sass • Postman


          </div>
        </div>
        <div className={styles.firstCompDiv}>
          <h5 className={styles.subHead}> Pliancy Infotech Pvt.Ltd. <span className={styles.exp_date}>12/2021 – 09/2023
          </span></h5>
          <p  className={styles.subHead}>• Developed dynamic and responsive web applications using ReactJS.
            Implemented state management using Redux for consistent and efficient data handling.
            Created reusable components and managed component libraries to streamline development
            processes.
            Collaborated with backend developers to integrate RESTful APIs and ensure seamless data flow.
            Optimized application performance and enhanced user experience through code-splitting and
            lazy loading.
            Utilized React Router for efficient client-side routing.
            Conducted code reviews and provided constructive feedback to maintain code quality.
          </p>
          <div className={styles.subHead}>

            Skills: • JavaScript  • TypeScript • ReactJS • Redux • NodeJs • Material UI • HTML • CSS • Tailwind CSS • Sass • Postman


          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
