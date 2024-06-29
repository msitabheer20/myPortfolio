import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerimg}>
        <Image className={styles.img} src="/watercolor-mountains-background.png" fill/>
      </div>
      <div className={styles.footeritem}>
      <h3 className={styles.footertext}>Made with 💓 by AD</h3>
      <Link href="#" className={styles.contact}>Contact Me 📞</Link>
      </div>
    </div>
  )
}

export default Footer
