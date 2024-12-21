import { useRef } from "react"
const CreaateTask = ({addTask}) => {
   const taskText = useRef()
  return (
    <div className='flex gap-4'>
      <input ref={taskText} type="text" className='bg-stone-200 rounded-sm p-2'/>
      <button onClick={()=>{addTask(taskText)}}>add task</button>
    </div>
  )
}

export default CreaateTask
