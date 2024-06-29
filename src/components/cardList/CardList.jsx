import React from 'react'
import Card from '../card/Card'
import styles from './cardList.module.css'
import Link from 'next/link'

const obj = [

  {
    "name": "rahul",
    "age": 23,
  },
  {
    "name": "Gokul",
    "age": 23,
  }
]
const CardList = () => {
  return (
    <>
    <div className={styles.cardContainer}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.list}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      <Link href="#" className={styles.seemore}>See More 👉</Link>
    </div>
    </>
  )
}

export default CardList
