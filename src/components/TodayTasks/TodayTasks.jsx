import { useState } from "react";
import { tasks } from "../../tasks";

const TodayTasks = () => {

    const [taskList, setTaskList] = useState(tasks);

    

    const handleToggle = (id) => {
  const updatedTasks = taskList.map((task) => {
    if (task.ID === id) {
      return { ...task, Completed: !task.Completed };
    }
    return task;
  });

  setTaskList(updatedTasks);
};
    return (
        <table>
  <thead>
    <tr>
      <th>Título</th>
      <th>Tiempo</th>
      <th>Progreso</th>
      <th>Completada</th>
    </tr>
  </thead>
  <tbody>
    {taskList.map((task) => (
      <tr key={task.ID}>
        <td>{task.Title}</td>
        <td>{task.Time}</td>
        <td>{task.Progress}%</td>
        <td>
          <input
            type="checkbox"
            checked={task.Completed}
            onChange={() => handleToggle(task.ID)}
          />
        </td>
      </tr>
    ))}
  </tbody>
</table>

    )
}

export default TodayTasks;