function Task({ task, onSwitch }) {
  return (
    <li>
      <input type="checkbox" checked={task.statusTask} onChange={onSwitch} />
      {task.nomtach}
    </li>
  );
}

export default Task;
