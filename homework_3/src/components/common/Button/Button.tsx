import React from "react";
import s from "./Button.module.css"

type ButtonType = {
    onClick: () => void
    text: string
}

export function Button(props: ButtonType) {

    return (
        <div>
            <button onClick={props.onClick} className={s.six}>{props.text}</button>
        </div>
    )
}


