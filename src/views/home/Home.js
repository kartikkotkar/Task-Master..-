
import React, { useState } from 'react';
import "./Home.css";
import addIcon from "./add.png"
import TaskCard from '../../components/TaskCard/TaskCard';

function Home() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    const addTask = () => {
      if (newTask===''){
        alert('please enter a task')
        return
      }
      setTasks([newTask, ...tasks])
      setNewTask('')
    }
  return (
    <div>
        <h1 className='text-heading'>ToDo App</h1>

        <div className='tasks-container'>
            {
                tasks.map((task, i) =>{
                   return <TaskCard  task={task} kay={i}/>
                })
            }
        </div>

        <div className='input-container'>

            <input type='text' placeholder='Add new task' className='task-input'
            value={newTask}
            onChange={(e)=>{
                setNewTask(e.target.value)
            }}/>

            <img src={addIcon} alt='Add' className='add-icon'
            onClick={addTask}/>

        </div>
    </div>
  )
}

export default Home