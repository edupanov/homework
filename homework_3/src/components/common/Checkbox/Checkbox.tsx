import React from "react";
import s from "./Checkbox.module.css"

type CheckboxType = {
    checked: boolean
    type: string
    id: string
}

export function Checkbox(props: CheckboxType) {

    return (
        <div>
            <input
                checked={props.checked}
                type={props.type}
                id={props.id}/>
            <label htmlFor="cb1">
                <div className={s.tick}/>
            </label>
        </div>
    )
}


