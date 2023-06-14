import React, { useState, useEffect, useContext } from 'react';
import styles from '../styles/Comics.module.css'

export default function Button(data) {
    const [isActive, setIsActive] = useState(false);

    return (
        <button
            className={`${isActive ? styles.buttonActive : ''} ${styles.button}`}
            onClick={(e) => { 
                setIsActive(!isActive);
            }}
        >
            <span className="material-symbols-outlined">favorite</span>
        </button>
    )
}