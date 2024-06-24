import Image from 'next/image'
import styles from './card.module.css'

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
        <div className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum vitae odio molestias modi maxime quos eligendi quam nulla quibusdam.
        </div>
      </div>
      <div className={styles.link}>
        <span>LINK</span>
        <span>Github</span>
      </div>
    </div>
  )
}

export default Card
