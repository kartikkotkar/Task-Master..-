import React from 'react'
import './TaskCard.css'

function TaskCard({task}) {
  return (
    <div className='task-card'>
    <h2 className='task-title'>{task}</h2>
    </div>
  )
}

export default TaskCard