import styles from '@/styles/Comics.module.css'

export default function Detail({ issue, publishDate, creators }) {
    return (
        <>
            <ul className={styles.detailInfo}>
                <li>
                    <span className={styles.label}>Issue:</span> {issue}
                </li>
                <li>
                    <span className={styles.label}>Published:</span> {publishDate}
                </li>
                <li>
                    <span className={styles.label}>Creators:</span> {creators.map((creator) => creator.name).join(', ')}
                </li>
            </ul>
        </>
    )
}