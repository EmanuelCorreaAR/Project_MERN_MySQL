import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

router.get('/ping', async (req, res) => {
    const [rows]  = await pool.query('SELECT 1 + 1 as result') // es asincrono por lo que colocamos async await
    console.log(rows[0]);//{} objeto  []arreglo
    res.json(rows[0]);
})

export default router;