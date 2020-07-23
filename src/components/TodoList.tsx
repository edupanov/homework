import React, {useState, ChangeEvent, KeyboardEvent} from "react";
import {FilterValuesType, TaskType} from "../App";
import {Checkbox} from "./common/Checkbox/Checkbox";
import s from "./TodoList.module.css"
import {Button} from "./common/Button/Button";
import {Input} from "./common/Input/Input";


type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>,
    addTask: (newTaskName: string) => void,
    removeTask: (taskId: string) => void,
    changeFilter: (newFilterValue: FilterValuesType) => void
}

function TodoList(props: TodoListPropsType) {
    let [taskName, setTaskName] = useState("");
    let addTask = () => {
        props.addTask(taskName);
        setTaskName("");
    }

    function onTaskNameChanged(e: ChangeEvent<HTMLInputElement>) {
        setTaskName(e.currentTarget.value)
    }

    function onAddTaskKeyPressed(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            addTask()
        }
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div className={s.add_task}>
                <Input
                    type="text"
                    value={taskName}
                    onChange={onTaskNameChanged}
                    onKeyPress={onAddTaskKeyPressed}
                />
                <Button
                    onClick={addTask}
                    text={"+"}/>
            </div>
            <ul className={s.ul}>
                {props.tasks.map((t) => {
                    let removeTask = () => {
                        props.removeTask(t.id)
                    }
                    return (
                        <li className={s.li} key={t.id}>
                            <Checkbox
                                checked={t.isDone}
                                type="checkbox"
                                id="cb1"
                            />
                            <span className={s.span}>{t.view}</span>
                            <Button
                                onClick={removeTask}
                                text={"x"}
                            />
                        </li>

                    )
                })}
            </ul>
            <div className={s.button_group}>
                <Button onClick={() => {
                    props.changeFilter("all")
                }} text={"All"}/>
                <Button onClick={() => {
                    props.changeFilter("completed")
                }} text={"Completed"}/>
                <Button onClick={() => {
                    props.changeFilter("low")
                }} text={"Low"}/>
                <Button onClick={() => {
                    props.changeFilter("middle")
                }} text={"Middle"}/>
                <Button onClick={() => {
                    props.changeFilter("height")
                }} text={"Height"}/>
            </div>
        </div>
    )
}

export default TodoList
