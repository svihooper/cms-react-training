import React from 'react'
import Image from 'next/image'
import styles from '../styles/Favorites.module.css'
import { useFavorites } from '../pages';

export const Favorites = () => {
    const {favorites, setFavorites} = useFavorites();

	return (
		<section className={styles.favoritesWrapper}>
			<h3 className={styles.heading}>Favorites</h3>
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
					onClick={() => {}}
				>
					X
				</button>
			</div>
			<div className={styles.favoritesContent}>
				<div className={styles.title}>{comic.title}</div>
				<div className={styles.label}>{`Issue: ${comic.issueNumber}`}</div>
			</div>
		</div>
	)
}