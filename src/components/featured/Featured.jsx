import Image from "next/image"
import styles from "./feature.module.css"

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/me.png"
            fill
            priority={true}
            alt=""
            className={styles.image}
          />
        </div>
        <div className={styles.summary}>
          <div className={styles.box1}></div>
          <div className={styles.box2}></div>
          <h3>Hi, my name is</h3>
          <h1>Abheer Dey.</h1>
          <h2>I build things for the web.</h2>
          <div className={styles.mainSkills}>
            <div><h3>Computer Science</h3></div>
            <div><h3>Full Stack Development</h3></div>
            <div><h3>Data Science</h3></div>
            <div><h3>Programming</h3></div>
            <div><h3>Listening Music</h3></div>
            <div><h3>Enjoy Yoga</h3></div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Featured
