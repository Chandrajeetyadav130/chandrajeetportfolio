import React from 'react'
import styles from "@/styles/Skills.module.css";

const Skill = () => {
  return (
    <section id="skills" className={styles.Skills}>
    <h2 className={styles.heading}>Skills</h2>
    <p className={styles.paragraph}>Here are some of my skills on which I have been working on for the past 2.4 years.</p>
    <div>
      <h2>Frontend Development:</h2>
      <ul>
        <li><span className={styles.fontBold}>React.js:</span> Experienced in building responsive, high-performance web applications using React. Familiar with hooks, state management (e.g., Redux, Context API), and optimizing components.</li>
        <li><span className={styles.fontBold}>HTML5 & CSS3:</span> Proficient in crafting semantic, accessible, and responsive designs, ensuring cross-browser compatibility.</li>
        <li><span className={styles.fontBold}>Bootstrap</span>: Skilled in using Bootstrap for creating mobile-first, responsive layouts with a focus on quick and efficient prototyping.</li>
        <li><span className={styles.fontBold}>Material UI (MUI):</span> Comfortable with implementing Material Design using MUI components and custom themes, enhancing UI consistency.</li>
        <li><span className={styles.fontBold}>Tailwind css:</span> Skilled in using Tailwind csss for creating mobile-first, responsive layouts with a focus on quick and efficient prototyping.</li>
      </ul>
    </div>
    <div>
      <ul>
        <li><span>Node.js & Express.jsBasic understanding of back-end development with Node.js and Express.js; capable of creating RESTful APIs and connecting with databases.</span></li>
        <li><span>Next.js:</span>Hands-on experience with Next.js for server-side rendering, dynamic routing, and building performant applications.</li>
      </ul>
    </div>
  </section>
  )
}

export default Skill
