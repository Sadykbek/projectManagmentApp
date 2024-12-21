import Sidebar from "./components/sidebar";
import Projects from "./components/Projects";
import { useState, useRef, createContext } from "react";
export  const AppState = createContext();

function App() {

  const [projectList, setProjectList] = useState([
    { title: "new", description: "", date: "" }
  ]);
  const newProject = useRef({ title: "", description: "", date: "" });
  const [currentProject, setCurrentProject] = useState(null);
  const addProject = () => {
    setProjectList([
      ...projectList,
      {
        title: newProject.current.title,
        description: newProject.current.description,
        date: newProject.current.date,
      },
    ]);
  };
  const [isCreating, setIsCreating] = useState(false);
  return (
      <AppState.Provider value={{ projectList, addProject, newProject, currentProject, setCurrentProject , setIsCreating}}>
        <div className="flex h-screen mt-20">
          <Sidebar setIsCreating={setIsCreating} />
          <Projects  isCreating={isCreating}/>
        </div>
      </AppState.Provider>
  );
}

export default App;
