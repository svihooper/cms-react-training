import React from 'react'
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export const HeroSlideshow = ({ src, alt, title }) => {
  return (
    <section className={styles.heroSlideshow}>
        <Image 
            className={styles.img}
            src={src}
            alt={alt}
            width={1920}
            height={867}
        />
        <div className={styles.borderPattern}></div>
        <div className={styles.heroContent}>
            {title}
        </div>
    </section>
  )
}
