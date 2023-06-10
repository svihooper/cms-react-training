import React, { useState, useRef } from "react";

type Props = {
    label : string,
    values : { name: string, id: string }[]
}

export const DropdownFilter = ({ label, values }: Props) => {
    const [value, setValue] = useState("");
    const ref = useRef<HTMLSelectElement>(null!);

    return (
        <select
            ref={ref}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        >
        { values.map(({ name, id }) => {
            return ( <option value={id}>{name}</option> )
        }) }
        </select>
    )
}