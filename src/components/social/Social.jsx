import Image from "next/image"
import styles from "./social.module.css"

const Social = () => {
  return (
    <>
      <div className={styles.profile_container}>
        <div className={styles.profile}>
          <Image
            src="/selfie.jpg"
            fill
            alt=""
          />
        </div>
        <div className={styles.profile}>
          <Image
            src="/selfie.jpg"
            fill
            alt=""
          />
        </div>
        <div className={styles.profile}>
          <Image
            src="/selfie.jpg"
            fill
            alt=""
          />
        </div>
        <div className={styles.profile}>
          <Image
            src="/selfie.jpg"
            fill
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default Social
