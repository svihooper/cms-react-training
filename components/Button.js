import styles from '@/styles/Comics.module.css'
import { useState } from 'react'

export default function Button() {
    const [isActive, setIsActive] = useState(false);

    return (
        <button
            className={`${isActive ? styles.buttonActive : ''} ${styles.button}`}
            onClick={(e) => setIsActive(!isActive)}
        >
            <span className="material-symbols-outlined">favorite</span>
        </button>
    )
}