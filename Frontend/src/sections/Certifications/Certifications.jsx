import React from 'react'
import styles from './CertificationStyles.module.css'
import Aws_Foundations from '../../assets/Aws_Cloud_Foundation.pdf'
import Azure_Fundamentals from '../../assets/Azure _Fundametals.pdf'
function Certifications() {
  return (
    <section id="certifications" className={styles.container}>
      <h1 className="sectiontitle">Certificates</h1>
     <div className={styles.certificatesContainer}>
      <p className={styles.text}>Amazon Cloud Foundations</p>
      <a href={Aws_Foundations}>
        <button>&#128206; Certificate</button>
      </a>
     </div>
     <div className={styles.certificatesContainer}>
     <p className={styles.text}>Azure Fundementals</p>
      <a href={Azure_Fundamentals}>
        <button>&#128206; Certificate</button>
      </a>
     </div>
    <div className={styles.certificatesContainer}>
    <p className={styles.text}>Mern Stack Internship Certificate</p>
      <a href="">
        <button>&#128206; Certificate</button>
      </a>
    </div>
    </section>
  )
}

export default Certifications