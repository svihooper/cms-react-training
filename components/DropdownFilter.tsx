import React from "react";

type Props = {
    className?: string,
    label: string,
    options: { label: string, value: string }[],
    value: string | string[],
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const DropdownFilter = ({ className, label, options, value, onChange }: Props) => {

    return (
        <select
            className={className}
            value={value}
            onChange={onChange}
        >
        { options.map(({ label, value }) => {
            return ( <option value={value} key={value}>{label}</option> )
        }) }
        </select>
    )
}