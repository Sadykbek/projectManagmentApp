import React from 'react'
import { useContext } from "react"
import {AppState} from "../../App.jsx"

const CurrentProject = () => {
   const context = useContext(AppState)
   const {currentProject, deleteProject, setCurrentProject} = context
  return (
    <div>
      <button onClick={()=>{deleteProject(currentProject.id); setCurrentProject(false)}}>delete </button>
      <h1>{currentProject.title}</h1>
      <p>{currentProject.id}</p>
    </div>
  )
}

export default CurrentProject
