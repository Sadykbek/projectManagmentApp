import noProjectPhoto from "../../assets/no-projects.png";
export default function NoProject({onClick})  {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-20 mt-20">
        <img src={noProjectPhoto} alt="" />
      </div>
      <h3 className="font-bold text-2xl text-stone-600">No project selected</h3>
      <p className="text-gray-500">
        select a project or get started with a new one
      </p>
      <button onClick={onClick} className="bg-gray-950 text-gray-400 px-4 py-2 rounded hover:bg-gray-300 hover:text-gray-800">
        create new project
      </button>
    </div>
  );
};

