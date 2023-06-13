import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import { DropdownFilter } from '../components/DropdownFilter';
import styles from '../styles/Filter.module.css'

export const Filters = () => {
    const router = useRouter();
    console.log('router', router);
    const [character, setCharacter] = useState("");

    useEffect(() => {
      console.log('character', character);
      if (character) {
          router.replace(`?characters=${character}`);
      }
    }, [character])
    

    return (
        <section className={styles.filterWrapper}>
            <span className={styles.filterLabel}>Filter:</span>
            
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
                value={character}
                setValue={setCharacter}
                onChange={(e) => setCharacter(e.target.value)}
            />
        </section>
        )
    }
    