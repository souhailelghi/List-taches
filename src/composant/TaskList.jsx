import Task from "./Task";
//vr 
function TaskList({ tasks, onSwitchTask }) {
  return (
    <ul>
      {tasks.map((t, index) => (
       <div key={index}> <Task  task={t} onSwitch={()=>onSwitchTask(index)}/></div>
      ))}
    </ul>
  );
}

export default TaskList;
