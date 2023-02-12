import axios from 'axios'

//Obtener
export const getTasksRequest = async () =>
    await axios.get('http://localhost:4000/tasks');

//Crear
export const createTaskRequest = async (task) =>
    await axios.post('http://localhost:4000/tasks', task);

//Borrar
export const deleteTaskRequest = async (id) =>
    await axios.delete(`http://localhost:4000/tasks/${id}`);
