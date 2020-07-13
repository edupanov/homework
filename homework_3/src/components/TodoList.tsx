import React, {useState, ChangeEvent, KeyboardEvent} from "react";
import {FilterValuesType, TaskType} from "../App";

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
            <div>
                <input
                    type="text"
                    value={taskName}
                    onChange={onTaskNameChanged}
                    onKeyPress={onAddTaskKeyPressed}
                />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {props.tasks.map((t) => {
                    let removeTask = () => {
                        props.removeTask(t.id)
                    }
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.view}</span>
                            <button onClick={removeTask}>x</button>
                        </li>

                    )
                })}
            </ul>
            <div>
                <button onClick={() => {props.changeFilter("all")}}>All</button>
                <button onClick={() => {props.changeFilter("completed")}}>Completed</button>
                <button onClick={() => {props.changeFilter("low")}}>Low</button>
                <button onClick={() => {props.changeFilter("middle")}}>Middle</button>
                <button onClick={() => {props.changeFilter("height")}}>Height</button>
            </div>
        </div>
    )
}

export default TodoList
