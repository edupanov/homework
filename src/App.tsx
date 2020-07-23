import React, {useState} from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import {v1} from 'uuid';


export type TaskType = {
    id: string,
    view: string,
    complexity: string,
    isDone: boolean
}

export type FilterValuesType = "all" | "completed" | "low" | "middle" | "height"

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), view: "работа", complexity: "height", isDone: true},
        {id: v1(), view: "аниме", complexity: "low", isDone: false},
        {id: v1(), view: "игры", complexity: "middle", isDone: true},
        {id: v1(), view: "реакт", complexity: "height", isDone: false},
        {id: v1(), view: "хтмл", complexity: "low", isDone: true}
    ])

    let [filter, setFilter] = useState<FilterValuesType>("all")

    function lengthTasks() {
        let Tasks = tasks.length
        alert(`Hi you have ${Tasks} tasks`)

    }

    function addTask(newTaskName: string) {
        let newTask = {id: v1(), view: newTaskName, complexity:"height", isDone: false};

        if (newTask.view !== ""){
            let newTasks = [newTask, ...tasks];
            setTasks(newTasks)
            alert(`Hi you added new task "${newTask.view}"`)
        } else lengthTasks()

    }

    function removeTask(tasksId: string) {
        let filteredTasks = tasks.filter((t) => t.id !== tasksId)
        setTasks(filteredTasks)
    }

    function changeFilter(newFilterValue: FilterValuesType) {
        setFilter(newFilterValue)
    }

    let tasksForTodoList = tasks;
    if (filter === "low") {
        tasksForTodoList = tasks.filter(t => t.complexity === "low")
    }
    if (filter === "middle") {
        tasksForTodoList = tasks.filter(t => t.complexity === "middle")
    }
    if (filter === "height") {
        tasksForTodoList = tasks.filter(t => t.complexity === "height")
    }
    if (filter === "completed") {
        tasksForTodoList = tasks.filter(t => t.isDone)
    }

    return (
        <div className="App">
            <TodoList
                title={"My plan to day"}
                tasks={tasksForTodoList}
                addTask={addTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
