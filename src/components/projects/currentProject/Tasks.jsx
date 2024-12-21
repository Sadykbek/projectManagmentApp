import React from 'react'

const Tasks = ({tasks, deleteTask}) => {
  return (
    <div className='flex justify-between'>
      {tasks.map((task, index) => (
         <div key={index} className='flex gap-5'>
            <p>{task.title}</p>
            <button onClick={()=> deleteTask(index)}>delete</button>
         </div>
      ))}
    </div>
  )
}

export default Tasks
