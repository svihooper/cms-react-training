import React, { useState, useRef } from "react";

export const CharacterFilter = () => {
    const [character, setCharacter] = useState("");

    // !null Read Only
    const ref = useRef<HTMLSelectElement>(null!);
    
    return (
        <select 
            ref={ref}
            value={character}
            onChange={(e) => setCharacter(e.target.value)}
        >
            <option value="1009368">Iron Man</option>
            <option value="1009220">Captain America</option>
            <option value="1009664">Thor</option>
            <option value="1009268">Deadpool</option>
            <option value="1009562">Scarlet Witch</option>
            <option value="1009189">Black Widow</option>
            <option value="1009707">Wasp</option>
            <option value="1010763">Gamora</option>
        </select>
    )
}