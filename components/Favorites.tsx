import React from 'react'
import Image from 'next/image'
import styles from '../styles/Favorites.module.css'
import { useFavorites } from '../pages';

export const Favorites = () => {
    const {favorites, setFavorites} = useFavorites();

	return (
		<section id="Favorites" className={styles.favoritesWrapper}>
			<h3 className={styles.heading}>{`Favorites (${favorites.length})`}</h3>
			{ favorites.length > 0 && 
				favorites.map((comic) => {
					return (
						<FavoriteItem comic={comic} key={comic.id}/>
					)
				})
			}
		</section>
	)
}

function FavoriteItem({ comic }) {
    const {favorites, setFavorites} = useFavorites();

	return (
		<div className={styles.favoritesItem} key={comic.id}>
			<div className={styles.favoritesThumbnail}>
				<Image 
					className={styles.img}
					src={`${comic.thumbnail?.path}.${comic.thumbnail?.extension}`}
					alt={comic.title}
					width={50}
					height={75}
				/>
				<button 
					className={styles.removeButton}
					title="Remove Favorite"
					onClick={() => setFavorites(favorites.filter((val) => val.id !== comic.id)) }
				>
					<i className={`${styles.buttonIcon} fas fa-times`}></i>
				</button>
			</div>
			<div className={styles.favoritesContent}>
				<div className={styles.title}>{comic.title}</div>
				<div className={styles.label}>{`Issue: ${comic.issueNumber}`}</div>
			</div>
		</div>
	)
}