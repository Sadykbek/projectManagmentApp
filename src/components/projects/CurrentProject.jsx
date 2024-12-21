import React from "react";
import { useContext, useRef, useEffect } from "react";
import { AppState } from "../../App.jsx";
import { use } from "react";

const CurrentProject = () => {
  const context = useContext(AppState);
  const { currentProject, deleteProject, setCurrentProject, projectList } = context;
 useEffect(() => {
  projectList.forEach((project) => {
    if (project.id === currentProject.id) {
      project.tasks = currentProject.tasks;
    }
  }
  );
  }, [currentProject]);
  const inputText = useRef("");
  const handleClearTask = (index) => {
    const newTasks = currentProject.tasks.filter((task, i) => i !== index);
    setCurrentProject({ ...currentProject, tasks: newTasks });
  }
  const handleAddTask = (str) => {
    const newTasks = [...currentProject.tasks, { title: str }];
    setCurrentProject({ ...currentProject, tasks: newTasks });
  }
  
  
  return (
    <div className="mt-20 flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{currentProject.title}</h1>
          <p className="text-stone-400">{currentProject.date}</p>
        </div>
        <button
          onClick={() => {
            deleteProject(currentProject.id);
            setCurrentProject(false);
          }}
        >
          delete{" "}
        </button>
      </div>
      <p className="pb-6 border-b-stone-400 border-b-2">{currentProject.description}</p>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Tasks</h2>
        <div className="flex gap-5">
          <input ref={inputText} type="text" className="bg-stone-200 p-2" placeholder="add a task" />
          <button onClick={()=>{handleAddTask(inputText.current.value); inputText.current.value = ""}}>add</button>
        </div>
        {currentProject.tasks.map((task, index) => (
          <div key={index} className="flex gap-5">
            <p>{task.title}</p>
            <button onClick={()=>handleClearTask(index)}>clear</button>
          </div>
        ))}
    </div>
    </div>
  );
};

export default CurrentProject;
