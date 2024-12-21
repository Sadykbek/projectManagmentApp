import { useContext, useState } from "react";
import CreateProject from "./projects/CreateProject";
import NoProject from "./projects/NoProject";
import CurrentProject from "./projects/CurrentProject";
import {AppState} from "../App"

export default function Projects({ projectList,  isCreating}) {
   const context = useContext(AppState)
   const {currentProject, setIsCreating} = context
  const handleCreate = () => {
   setIsCreating(true)
  };
  const cancelFunction = () =>{
   setIsCreating(false)
  }
  return (
    <>
      <div className="w-8/12 mx-10">
        {  !isCreating && !currentProject ? (
         <NoProject onClick={handleCreate}/>
        ): <></>}
        {
         isCreating && <CreateProject cancel={cancelFunction}/>
        }
        {
         currentProject && !isCreating ? <CurrentProject />:
         <></>
        }
      </div>
    </>
  );
}
