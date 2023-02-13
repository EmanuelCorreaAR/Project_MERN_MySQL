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

//obtiene una tarea
export const getTaskRequest = async (id) =>
    await axios.get(`http://localhost:4000/tasks/${id}`);

//actualiza una tarea
export const updateTaskRequest = async (id, newFields) =>
    await axios.put(`http://localhost:4000/tasks/${id}`, newFields);

//para el toogle en true o false
export const toggleTaskDoneRequest = async (id, done) =>
    await axios.put(`http://localhost:4000/tasks/${id}`, {
        done,
    });
