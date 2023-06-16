import React, { useState, useEffect, useContext } from 'react';
import styles from '../styles/Comics.module.css'
import { useFavorites } from '../pages';

export default function Button(data) {
    const {favorites, setFavorites} = useFavorites();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        var isActive = favorites.map(val => val.id).includes(data.data.id);
        setIsActive(isActive);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites])

    const favoritesHandler = (data) => {
        if (favorites.length < 10) {
            if (favorites.includes(data)) {
                const newList = favorites.filter((val) => val.id !== data.id);
                setFavorites(newList)
            } else {
                setFavorites([...favorites, data]);
            }
        }
    }

    return (
        <button
            className={`${isActive ? styles.buttonActive : ''} ${styles.button}`}
            title="Favorite"
            onClick={(e) => { 
                setIsActive(favorites.includes(data.data));
                favoritesHandler(data.data);
            }}
        >
            <i className="fas fa-bolt"></i>
        </button>
    )

}