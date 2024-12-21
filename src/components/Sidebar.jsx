import ProjectList from "./sidebars/ProjectList"
export default function Sidebar({setIsCreating}) {
return(
<div className="px-5 py-10 bg-gray-950 flex flex-col w-3/12 rounded-r-xl">
   <h2 className="text-3xl font-bold text-white">Your projects</h2>
   <button onClick={() => setIsCreating(true)} className="text-xl font-bold text-gray-400 bg-stone-800 w-fit px-4 py-2 rounded mt-8">+Add project</button>
   <ProjectList/>
</div>
)
}