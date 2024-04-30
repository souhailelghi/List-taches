function Task({task,onSwitch}) {
    //vr
  return (
    <li>
      <input type="checkbox" 
      checked={task.statusTask}
       onChange={onSwitch} />
      {task.nomtach}
    </li>
  );
}

export default Task;
