import React from 'react'
import { useContext } from "react"
import {AppState} from "../../App.jsx"

const CurrentProject = () => {
   const context = useContext(AppState)
   const {currentProject} = context
  return (
    <div>
      <h1>{currentProject.title}</h1>
    </div>
  )
}

export default CurrentProject
