import { useState } from "react";
import TaskList from "../src/composant/TaskList";
import TaskForm from "../src/composant/TaskForm";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("Toutes");

  //----------
  const handelAddTask = (taskName) => {
    const task = {
      nomtach: taskName,
      statusTask: false,
    };

    setTasks([...tasks, task]);
  };

  const handleSwitchTask = (index) => {
    let updatedTasks = [...tasks];
    updatedTasks[index].statusTask = !updatedTasks[index].statusTask;
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "terminées") {
      return task.statusTask;
    } else if (filter === "nonterminées") {
      return !task.statusTask;
    } else {
      return true;
    }
  });

  return (
    <div className="App">
      <h1>Gestionnaire de tâches</h1>
      <br />
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="Toutes">Toutes les tâches</option>
        <option value="terminées">Tâches terminées</option>
        <option value="nonterminées">Tâches non terminées</option>
      </select>{" "}
      <br />
      <br />
      <TaskForm onAddTask={handelAddTask} />
      <br />
      <br />
      <br />
      <TaskList tasks={filteredTasks} onSwitchTask={handleSwitchTask} />
    </div>
  );
}

export default App;
