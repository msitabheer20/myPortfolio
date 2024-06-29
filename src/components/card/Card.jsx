import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <Image
          src="/blog2.PNG"
          fill
          alt=""
          className={styles.img}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.projectTitle}>Name of project</h1>
        <div className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum vitae odio molestias modi maxime quos eligendi quam nulla quibusdam.
        </div>
      </div>
      <div className={styles.links}>
        <Link href="#" className={styles.link}>LINK</Link>
        <Link href="#" className={styles.link}>Github</Link>
      </div>
    </div>
  )
}

export default Card
