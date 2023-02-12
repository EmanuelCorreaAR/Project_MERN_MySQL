import { useEffect, useState } from "react";
import { getTasksRequest } from "../api/tasks.api";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await getTasksRequest();
      setTasks(response.data); //guardo todo el array detro de la variable tasks
    }
    loadTasks();
  }, []);

  function renderMain() {
    if(tasks.length === 0) return <h1>NOT TASKS YET</h1>
   return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }
  
  return (
    <div>
      <h1>Task</h1>
      {renderMain()}
    </div>
  );
}

export default TasksPage;
