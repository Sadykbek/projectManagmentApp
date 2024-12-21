import { useContext } from "react"
import {AppState} from "../../App.jsx"


const ProjectList = ({}) => {
const context = useContext(AppState)
const {projectList, setCurrentProject, setIsCreating} = context
console.log(projectList)
  return (
    <div>
      {projectList && projectList.length > 0 ? (
      projectList.map((project, index) => (
        <div key={index} onClick={() => {setCurrentProject(project); setIsCreating(false)}}>
          <h3 className="text-white">{project.title}</h3>
        </div>
      ))
    ) : (
      <p>No projects available.</p>
    )}
    </div>
  )
}

export default ProjectList
