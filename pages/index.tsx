// TO DO
// - DropdownFilter component is already being imported
// Add DropdownFilter components in for both character and creator key/values

import React, { useState, useEffect, createContext, useContext } from 'react'
import { StickyContainer, Sticky } from 'react-sticky';
import { Navbar } from '../components/Navbar';
import { HeroSlideshow } from '../components/HeroSlideshow';
import { Filters } from '../components/Filters';
import { Favorites } from '../components/Favorites';
import { Comics } from '../components/Comics'
import { ComicType } from '../components/Comic';
import styles from '../styles/Home.module.css'

export interface ProviderProps {
  favorites?: ComicType[],
  setFavorites: (favorites:ComicType[]) => void
}

export const FavoritesContext = createContext<ProviderProps>(null);

export const useFavorites = () => useContext(FavoritesContext);

export default function Home() {
  const [favorites, setFavorites] = useState<ComicType[]>([]);
  const ProviderValue : ProviderProps = { favorites, setFavorites };

  useEffect(() => {
    const localStorageFavorites = localStorage.getItem('favorites');
    if (localStorageFavorites.length > 0) { setFavorites(JSON.parse(localStorageFavorites)); }
  }, []);

  return (
      <main className={`${styles.main}`}>
        <header className={styles.header}>
        <FavoritesContext.Provider value={ProviderValue}>
          <Navbar />
        </FavoritesContext.Provider>

          <section className={styles.slideshowContainer}>
            <HeroSlideshow 
              src="/hero-photo.png"
              alt="Comic Hero Image"
              title="Comic Closet"
            />
          </section>
        </header>
        
        <section className={styles.bodyContainer}>
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

          <FavoritesContext.Provider value={ProviderValue}>
              <section className={styles.comicsListView}>
                <div className={styles.mainPane}>
                  <Filters />
                  <Comics 
                  />
                </div>

                <StickyContainer>
                  <Sticky>
                    { ({style}) => (
                      <div style={style}>
                        <Favorites />
                      </div>
                    ) }
                  </Sticky>
                </StickyContainer>
              </section>
            </FavoritesContext.Provider>
        </section>
      </main>
  )
}
