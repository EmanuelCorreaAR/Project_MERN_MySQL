import express from 'express';
import { PORT } from './config.js';
import cors from 'cors';
import { dirname, join } from 'path';//permite generar una constante y extraer la ruta absoluta
import { fileURLToPath } from 'url';

import indexRoutes from './routes/index.routes.js'
import taskRoutes from './routes/task.routes.js'


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

app.use(cors());

app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes);

app.use(express.static(join(__dirname,'../client/dist')));//esto es para que el servidor sirva a client/dist

app.listen(PORT)
console.log(`Server is listening on port ${PORT}`);
