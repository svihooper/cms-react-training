import React, { useState, useRef, Dispatch, SetStateAction } from "react";

type Props = {
    label : string,
    options : { label: string, value: string }[],
    value : string,
    setValue : Dispatch<SetStateAction<string>>,
    onChange : (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const DropdownFilter = ({ label, options, value, onChange }: Props) => {

    return (
        <select
            value={value}
            onChange={onChange}
        >
        { options.map(({ label: name, value: id }) => {
            return ( <option value={id} key={id}>{name}</option> )
        }) }
        </select>
    )
}