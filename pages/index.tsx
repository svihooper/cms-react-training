// TO DO
// - DropdownFilter component is already being imported
// Add DropdownFilter components in for both character and creator key/values

import React, { useState, useEffect, createContext, useContext, useCallback, useMemo } from 'react'
import styles from '../styles/Home.module.css'
import { Comics } from '../components/Comics'
import { Filters } from '../components/Filters';
import { Favorites } from '../components/Favorites';
import { useRouter } from "next/router";

const FavoritesContext = createContext({
  favorites: [],
  setFavorites: () => {}
});

export default function Home() {
  const [favorites, setFavorites] = useState([]);

  return (
      <main className={`${styles.main}`}>
        <div className={styles.header}>
          <h1>React Exercise 1 - Comic Grid</h1>
        </div>

        <section className={styles.introContainer}>
          <div className="intro-heading">
            <h2 className={styles.introTitle}>
              <span className={styles.titleBanner}>New Comics!</span> <span className={styles.titleContent}>Coming Out Daily</span>
            </h2>
            <p>
              Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
          </div>
        </section>

        <section className={styles.comicsListView}>
          <div className={styles.mainPane}>
            <Filters />
            <Comics 
            />
          </div>
          <div className={styles.favoritesPane}>
            <section className={styles.favoritesWrapper}>
                <h3>Favorites</h3>

            </section>
          </div>
        </section>
      </main>
  )
}
