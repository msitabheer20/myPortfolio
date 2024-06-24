import Image from 'next/image'
import styles from './navbar.module.css'
import { Bebas_Neue } from 'next/font/google'
import ThemeToggle from '../themeToggle/ThemeToggle'
import Link from 'next/link'
import NavLinks from '../navlinks/NavLinks'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
})

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={`${bebas.className} ${styles.insideNav}`}>
        <div>
          <h1 className={styles.myName}>Abheer Dey</h1>
          <h1 className={styles.responsiveName}>Abheer</h1>
        </div>

        <div className={styles.subject}>
          <Link className={styles.link} href="/">About</Link>
          <Link className={styles.link} href="/">Projects</Link>
          <Link className={styles.link} href="/">Contact</Link>
        </div>

        <div className={styles.talk}>

          <div className={styles.sun}>
            <Image
              src="/sunny.png"
              fill
              alt=""
            />
          </div>

          <div className={styles.navRight}>
            <div style={styles.responsiveToggle}>
              <ThemeToggle />
            </div>
            <div className={`${bebas.className} ${styles.btn}`}>
              <Link href="https://drive.google.com/file/d/1VNIEoU1ky6cLGjj4kRb-grYaOUij_ym0/view" target='_blank' className={styles.resumeBtn}>Resume</Link>
            </div>

            <NavLinks/>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar
