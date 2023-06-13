import React from 'react'
import { useRouter } from "next/router";
import { DropdownFilter } from '../components/DropdownFilter';
import styles from '../styles/Filter.module.css'

export const Filters = () => {
    const router = useRouter();

    return (
        <section className={styles.filterWrapper}>
            <span className={styles.filterLabel}>Filter By:</span>
            <div className={styles.filters}>
                <DropdownFilter
                    label="Character"
                    options={[
                        { label: "Character", value : "" },
                        { label: "Iron Man", value: "1009368" },
                        { label: "Captain America", value: "1009220" },
                        { label: "Thor", value: "1009664" },
                        { label: "Deadpool", value: "1009268" },
                        { label: "Scarlet Witch", value: "1009562" },
                        { label: "Black Widow", value: "1009189" },
                        { label: "Wasp", value: "1009707" },
                        { label: "Gamora", value: "1010763" },
                    ]}
                    value={router.query.characters}
                    onChange={(e) => {
                        router.query.characters = e.target.value;
                        router.push({ pathname: '/', query : router.query });
                    }}
                />

                <DropdownFilter
                    label="Creator"
                    options={[
                        { label: "Creator", value : "" },
                        { label: "Kate Leth", value: "12787" },
                        { label: "Brian Michael Bendis", value: "24" },
                        { label: "Stan Lee", value: "30" },
                        { label: "Steve Ditko", value: "32" },
                        { label: "Jack Kirby", value: "196" }
                    ]}
                    value={router.query.creators}
                    onChange={(e) => {
                        router.query.creators = e.target.value;
                        router.push({ pathname: '/', query : router.query });
                    }}
                />
            </div>
        </section>
        )
    }
    