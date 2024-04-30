import React, { useState } from "react";


// function for taskForm 
function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevnetDault ka thbaas  submition  l event or  envoy de form 
    if (!taskName.trim()) return; // checked the task name is empty or not // trim- remove white spaces from start and end
    onAddTask(taskName); // we call for add new task ♥ 
    setTaskName(""); // to empty the value of input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      placeholder="Saisir le nom de la tâche"
      value={taskName}
      onChange={(e)=> setTaskName(e.target.value)} 
      
       /> 
      <button type="submit">ajouter Task</button>
    </form>
  );
}

export default TaskForm;
