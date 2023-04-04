import React, { useEffect, useState } from 'react'
import './Todo.css'
import AddTask from './Addtask'
import ListTask from './Listtask'

function Todo() {

    const [state, setstate] = useState([])

    useEffect(() => {
        document.title = `you have ${state.length}pending task(s)`
    })

    const additem = (title) => {
        const newtask = [...state, { title }]
        setstate(newtask)

    }

    const removeTask = (index) => {
        const newTask = [...state]
        newTask.splice(index, 1)
        setstate(newTask)
    }   

    return (
        <div>
            <div className='todo-container'>
                <div className='header'>TODO APP</div>
                <div className='task-add'>
                    <AddTask additem={additem} />
                </div>
                <div className='tasks'>
                    {state.map((e, index) => <ListTask task={e} removeTask={removeTask} index={index} />)}

                </div>
            </div>
        </div>

    )
}

export default Todo