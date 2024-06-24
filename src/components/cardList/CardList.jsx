import React from 'react'
import Card from '../card/Card'
import styles from './cardList.module.css'

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
      <Card />
      <Card />
      <Card />
      </div>
    </div>
    </>
  )
}

export default CardList
