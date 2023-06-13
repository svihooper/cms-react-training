import React from 'react';
import styles from '../styles/Comics.module.css';

type ComicDetail = {
    issueNumber: string,
    publishDate?: string,
    creators: {
        available: number,
        items: { name: string }[],
    }
}

export default function Detail({ issueNumber, publishDate, creators }: ComicDetail) {
    return (
        <>
            <ul className={styles.detailInfo}>
                <li>
                    <span className={styles.label}>Issue: </span>
                    {issueNumber}
                </li>

                { publishDate &&
                    <li>
                        <div className={styles.label}>Published: </div>
                        {publishDate}
                    </li>
                }
                { creators.available > 0 && 
                    <li>
                        <div className={styles.label}>Creators:</div>
                        {creators.items.map((creator) => creator.name).join(', ')}
                    </li>
                }
            </ul>
        </>
    )
}