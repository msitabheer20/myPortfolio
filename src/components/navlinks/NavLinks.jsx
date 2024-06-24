'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from './navLinks.module.css'
import { Cross as Hamburger } from 'hamburger-react'

const NavLinks = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div onClick={() => setOpen(!open)} className={styles.burger}>
                <div className={styles.burgerContainer}>
                    <Hamburger toggled={open} toggle={setOpen} />
                </div>
            </div>

            {
                open && (
                    <div className={styles.responsiveMenu}>
                        <Link className={styles.link} href="/">Projects</Link>
                        <Link className={styles.link} href="/">About</Link>
                        <Link className={styles.link} href="/">Contact</Link>
                    </div>
                )
            }


        </>
    )
}

export default NavLinks;