import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Input.module.css"

type InputType = {
    type: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
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


