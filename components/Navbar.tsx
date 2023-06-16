import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '../components/Navigation';
import styles from '../styles/Navigation.module.css'

export const Navbar = () => {
  return (
    <section className={styles.navbar}>
        <div className={`${styles.navInner}`}>
          <Link href="/">
            <Image 
                className={styles.logo}
                src="/logo.png"
                alt="Comic Closet Logo"
                width={106}
                height={106}
            />
          </Link>

            <Navigation />
        </div>
    </section>
  )
}
