import axios from 'axios'

//Obtener
export const getTasksRequest = async () =>
    await axios.get('projectmernmysql-production.up.railway.app/');

//Crear
export const createTaskRequest = async (task) =>
    await axios.post('projectmernmysql-production.up.railway.app/', task);

//Borrar
export const deleteTaskRequest = async (id) =>
    await axios.delete(`projectmernmysql-production.up.railway.app/${id}`);

//obtiene una tarea
export const getTaskRequest = async (id) =>
    await axios.get(`projectmernmysql-production.up.railway.app/${id}`);

//actualiza una tarea
export const updateTaskRequest = async (id, newFields) =>
    await axios.put(`projectmernmysql-production.up.railway.app/${id}`, newFields);

//para el toogle en true o false
export const toggleTaskDoneRequest = async (id, done) =>
    await axios.put(`projectmernmysql-production.up.railway.app/${id}`, {
        done,
    });
