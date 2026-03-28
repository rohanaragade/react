import React, { useState } from 'react'
import './Todo.css';
import { MdCheck } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

const Todo = () => {
    const [ipvalue, setIpvalue] = useState(" ");
    const [task, setTask] = useState([]);
    const livetime = new Date().toLocaleTimeString();
    const liveday = new Date().toLocaleDateString();
    const [time, setTime] = useState(" ");

    setInterval(()=>{
        setTime(new Date().toLocaleTimeString())
    },1000)
    

    const handleForm = (event) => {
        event.preventDefault();

        if (!ipvalue) { return };
        if (task.includes(ipvalue)) {
            setIpvalue(" ");
            return
        }
        setTask((prev) => {
            return [...prev, ipvalue]
        });
        setIpvalue(" ");
    }


    const deleteTask = (value) =>{
       const newdata = task.filter((data)=>{
            return data != value;
        })
        setTask(newdata);
    }

    const clearTodoData = () =>{
        setTask([]);
    }

    return (
        <div className='todo'>
            <h1 className='todohead'>Todo List</h1>
            <h2 className='daytime'>{liveday} - {time}</h2>
            <div className='todo_ipdata'>
                <form onSubmit={handleForm}>
                    <input className='ip' type='text' autoComplete='off' value={ipvalue} onChange={(e) => setIpvalue(e.target.value)} />
                    <button className='todobtn' type='submit'>Add Task</button>
                </form>
            </div>
            <div className='task'>
                {task.map((value, index) => {
                    return <li key={index} className='taskitem'>
                        <span>{value}</span>
                        <button><MdCheck className='check' /></button>
                        <button onClick={()=>{deleteTask(value)}}><IoMdTrash className='trash' /></button>
                    </li>
                })}
            </div>
            <div>
                <button className='todoclear' onClick={clearTodoData}>Clear All</button>
            </div>
        </div>
    )
}

export default Todo