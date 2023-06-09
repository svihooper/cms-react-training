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
                        <span className={styles.label}>Published: </span>
                        {publishDate}
                    </li>
                }
                { creators.available > 0 && 
                    <li>
                        <span className={styles.label}>Creators:</span>
                        {creators.items.map((creator) => creator.name).join(', ')}
                    </li>
                }
            </ul>
        </>
    )
}