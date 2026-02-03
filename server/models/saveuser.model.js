import pool from '../services/database.service.js';

export const saveUser = async (username, password) => { 
    const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *';
    const values = [username, password];
    try {
        const res = await pool.query(query, values);
        return res.rows[0];
    } catch (err) {
        throw new Error('Error saving user: ' + err.message);
    }   
};