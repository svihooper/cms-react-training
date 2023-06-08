import styles from '@/styles/Comics.module.css'

export default function Detail({ issueNumber, publishDate, creators }) {
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
                        <span className={styles.label}>Creators: </span> 
                        {creators.items.map((creator) => creator.name).join(', ')}
                    </li>
                }
            </ul>
        </>
    )
}