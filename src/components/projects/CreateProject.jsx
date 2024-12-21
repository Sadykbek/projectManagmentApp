import { use } from "react";
import { AppState } from "../../App";
import { useContext, useRef } from "react";

export default function CreateProject({cancel}) {
  const context = useContext(AppState)
  const { addProject, newProject} = context
  const today = new Date().toISOString().split('T')[0];
  const validate=()=>{
    if(newProject.current.title === "" || newProject.current.date === "" || newProject.current.description === ""){
      return false
    }
    return true
  }
  const handleClick = () => {
    if(validate()){
      addProject()
      cancel()
      newProject.current = {title: "", description: "", date: "", tasks: []}
    }
    else{
      alert("please fill out all fields")
    }
  }

  return (
    <div className="flex flex-col gap-4 mt-20">
      <div className="ml-auto flex gap-4">
        <button onClick={cancel}>cancel</button>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 hover:text-gray-100 " onClick={handleClick}>save</button>
      </div>
      <label htmlFor="">title</label>
      <input  onChange={(e) => newProject.current.title = e.target.value} type="text"  className="bg-stone-200 rounded-sm p-2"/>
      <label htmlFor="">description</label>
      <textarea onChange={(e) => newProject.current.description = e.target.value} name="" id="" className="bg-stone-200 rounded-sm p-2"></textarea>
      <label htmlFor="">due date</label>
      <input onChange={(e) => newProject.current.date = e.target.value} type="date" min={today} className="bg-stone-200 rounded-sm p-2" />
    </div>
  );
}
