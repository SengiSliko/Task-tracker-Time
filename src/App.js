import AddTask from "./Components/AddTask";
import { useEffect, useState } from "react";
import ToDO from "./Components/ToDo";
import { useDrop } from "react-dnd";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [completed,setCompleted]= useState([]);

  useEffect(() => {
    let array = localStorage.getItem("taskList");
    if(array){
      setTaskList(JSON.parse(array));
    }
  })

const [{isOver},drop] = useDrop(()=> ({
  accept: "todo",
  drop: (item) => addToCompleted(item.id,item.projectName,item.taskDescription, item.timestamp,item.duration),
  collect: (monitor) => ({
    isOver: !!monitor.isOver(),
  })
}))

const addToCompleted = (id,projectName,taskDescription,timestamp,duration) => {

  const moveTask = taskList.filter((task) => id === task.id);
  setCompleted((completed)=> [...completed,{moveTask,projectName,taskDescription,timestamp,duration}])
}
  return (
    <div>
      <h1 className="text-2xl font-bold py-4 pl-6">The Task tracker</h1>
      <p className="text-xl pl-6">Hi There</p>
      <div className="flex flex-row items-center">
        <p className="text-xl pl-6"> click </p>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <p className="text-xl pl-6"> to add a new task </p>
      </div>
      <div className="flex flex-row" >
      <div className="w-full">
        <h2 className="ml-6 text-xl font-semibold w-3/4 w-3/4 max-w-lg py-2 px-4 bg-gray-200">
          {" "}
          To Do:
        </h2>

        {taskList.map((task, i) => (
          <ToDO
            key={i}
            task={task}
            index={i}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
      <div className="w-full flex flex-col" ref={drop}>

      <h2 className="ml-6 text-xl font-semibold w-3/4 w-3/4 max-w-lg py-2 px-4 bg-gray-200">
          {" "}
          Completed:
        </h2>

        {completed.map((task, i) => (
          <ToDO
            key={i}
            task={task}
            index={i}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}

      </div>
      </div>
    </div>
  );
}

export default App;
