import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Saisir le nom de la tâche"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <br /><br />
      
      <button type="submit">ajouter Task</button>
    </form>
  );
}

export default TaskForm;
