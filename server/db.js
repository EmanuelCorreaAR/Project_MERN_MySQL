import { createPool } from 'mysql2/promise';
import {
    MYSQLHOST,
    MYSQLUSER,
    MYSQLPASSWORD,
    MYSQLDATABASE,
    MYSQLPORT
} from './config.js';

export const pool = createPool({
    host: MYSQLHOST,
    port: MYSQLPORT,
    user: MYSQLUSER,
    password: MYSQLPASSWORD,
    database: MYSQLDATABASE
});