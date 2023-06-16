import React from 'react'
import Link from 'next/link';
import styles from '../styles/Navigation.module.css'
import { useFavorites } from '../pages';

export const Navigation = () => {
    const {favorites, setFavorites} = useFavorites();

    return (
    <div className={styles.navLinks}>
        <Link href="/">
            Home
        </Link>

        <Link href="/">
            Shop
        </Link>

        <Link href="/#Favorites">
            <i className="fas fa-bolt"></i> My Favorites <span className={styles.count}>{`(${favorites.length})`}</span>
        </Link>
    </div>
  )
}
