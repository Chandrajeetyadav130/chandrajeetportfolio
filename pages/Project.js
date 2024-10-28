import React from 'react'
import styles from "@/styles/Project.module.css";
import Link from 'next/link';
const Project = () => {
  return (
    <section id="project">
      <h2 className={styles.heading}>Project</h2>
      <p className={styles.subHead}>I have worked on mutiple projects. </p>
      <h3 className={styles.subHead}>Here are some of my projects.</h3>
      <div className={styles.exprienceMainContainer}>
        {/* firstss */}
        <div className={styles.experienceInnerContainer}>
          <img src="/weedx.jpeg" alt="" className={styles.expreienceTechImage} />
          <div className={styles.projectSkill}>
            <span>Reactjs</span>
           <span>Html</span>
           <span>css</span>
           <span>Mongodb</span>
           <span>React Hook form</span>
           <span>react hooks</span>
          </div>
          <h3>WeedX.io</h3>

          <div className={styles.projectcontent}>
          I developed a full-featured ecommerce website using the MERN stack (MongoDB, Express, React, and Node.js). MongoDB handles all product, user, and order data, making storage and retrieval efficient and scalable. The backend is built with Express and Node.js, providing robust API endpoints for user authentication, product management, and order processing. On the frontend, React ensures a dynamic, responsive user interface where customers can easily browse, add items to their cart, and checkout. This tech stack enables a fast, modern ecommerce experience that’s easy to maintain and extend
          </div>
          <Link className={styles.projectLink}  href="https://www.weedx.io/" alt="weedxlink">view live</Link>

        </div>
        <div className={styles.experienceInnerContainer}>
          <img src="/technicalblog.jpeg" alt="" className={styles.expreienceTechImage} />
          <div className={styles.projectSkill}>
            <span>Nextjs</span>
           <span>Html</span>
           <span>css</span>
           <span>file handling</span>
           <span>React Hook form</span>
           <span>react hooks</span>
          </div>
          <h3>Technicalblog</h3>

          <div className={styles.projectcontent}>
          My Next.js static blog site leverages Next.js's static generation feature to optimize performance and SEO. Each blog post is statically generated at build time, creating individual HTML files that serve content quickly and efficiently. This approach benefits users by delivering fast load times, reduces server load since pages don’t require server rendering on each request, and enhances SEO since all page content is pre-rendered and accessible to search engines.
          </div>
          <Link className={styles.projectLink}  href="https://technicalblognextversion.netlify.app/Blogs/" alt="techblog">view live</Link>

        </div>

        {/* second project */}
     
        <div className={styles.experienceInnerContainer}>
          <img src="/ecommercenextshop.jpeg" alt="" className={styles.expreienceTechImage} />
          <div className={styles.projectSkill}>
            <span>Nextjs</span>
           <span>Html</span>
           <span>css</span>
           <span>Mongodb</span>
           <span>React Hook form</span>
           <span>react hooks</span>
           <span>host on render </span>
          </div>
          <h3>EcommerceShop</h3>

          <div className={styles.projectcontent}>
          I developed an ecommerce website using Next.js, leveraging MongoDB as the database to handle product, user, and order data efficiently. The backend APIs are built using Next.js's server capabilities, which streamline data fetching and provide server-side functionality. This setup ensures quick responses, enhances SEO, and supports dynamic routing for a smooth user experience. Next.js’s server-side rendering also optimizes page load times, making the site fast and highly scalable.
          </div>
          <Link className={styles.projectLink}  href="https://ecommercenextapp.onrender.com/" alt="ecommercenextapp">view live</Link>

        </div>
        {/* third */}
    
      </div>

    </section>
  )
}

export default Project