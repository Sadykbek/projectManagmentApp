import Sidebar from "./components/sidebar";
import Projects from "./components/Projects";
import { useState, useRef, createContext } from "react";
export  const AppState = createContext();
let id = 1;

function App() {

  const [projectList, setProjectList] = useState([
    { id:0, title: "new", description: "this is a new project", date: new Date().toDateString(), tasks:[{title: "task1"}] },
  ]);
  const newProject = useRef({ title: "", description: "", date: "" , tasks:[]});
  const [currentProject, setCurrentProject] = useState(null);
  const addProject = () => {
    setProjectList([
      ...projectList,
      {
        id: id++,
        title: newProject.current.title,
        description: newProject.current.description,
        date: newProject.current.date,
        tasks: newProject.current.tasks
      },
    ]);
  };
  const deleteProject = (id) => {
    setProjectList(projectList.filter((project) => project.id !== id));
  }
  const [isCreating, setIsCreating] = useState(false);
  return (
      <AppState.Provider value={{ projectList, addProject, newProject,  currentProject, setCurrentProject , setIsCreating, deleteProject }}>
        <div className="flex h-screen mt-20">
          <Sidebar setIsCreating={setIsCreating} />
          <Projects  isCreating={isCreating}/>
        </div>
      </AppState.Provider>
  );
}

export default App;
