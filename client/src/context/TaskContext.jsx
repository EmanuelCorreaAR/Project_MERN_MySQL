import { createContext, useContext, useState } from "react";
import {getTasksRequest} from '../api/tasks.api'

//este contexto me permite comunicarme con el grupo
export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskContextProvider");
  }
  return context;
};

//este contecto agrupa
export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response.data); //guardo todo el array detro de la variable tasks
  }

  return (
    <TaskContext.Provider value={{ tasks , loadTasks}}>{children}</TaskContext.Provider>
  );
};
