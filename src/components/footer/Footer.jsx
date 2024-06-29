import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3 className={styles.footertext}>Made with 💓 by Abheer</h3>
      <Link href="#" className={styles.contact}>Contact Me 📞</Link>
    </div>
  )
}

export default Footer
