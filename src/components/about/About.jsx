import Image from 'next/image'
import styles from './about.module.css'

const About = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.main}>
          <h1 className={styles.title}>About</h1>
          <div className={styles.content}>
            <div className={styles.box1}></div>
            <div className={styles.box2}></div>
            <Image
              width={
                400}
              height={400}
              src="/about.svg"
              alt=""
              className={styles.img}
            />
            <p>Hello! Im <span>Abheer Dey</span>, a passionate and dedicated <span>web developer</span> currently pursuing <span>B.Tech</span> in <span>Computer Science</span> from <span>Maharaja Surajmal Institute of Technology</span>, New Delhi. With a solid foundation in both <span>frontend</span> and <span>backend</span> technologies, I strive to create seamless, user-friendly web applications. My technical expertise spans across various domains, including, <span>React.js, Next.js, Node.js, JavaScript, C++, MySQL</span> and <span>MongoDB</span>. I also hold a certification in <span>MERN Stack Web Development</span> from Brain Mentors, where I mastered MongoDB, Express.js, React.js, and Node.js. Feel free to explore my projects on <span>GitHub</span> or connect with me on <span>LinkedIn </span>. 
            </p>
            <h1><span>Let&apos;s build something amazing together!</span> 🎊</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
