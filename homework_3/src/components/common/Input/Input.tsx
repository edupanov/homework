import React from "react";
import s from "./Input.module.css"

type InputType = {
    type: string
    value: string
    onChange: any
    onKeyPress: any
}

export function Input(props: InputType) {

    return (
        <div className={s.div_input}>
            <input className={s.input}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                onKeyPress={props.onKeyPress}
            />
        </div>
    )
}


