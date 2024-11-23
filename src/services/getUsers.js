const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
});

const fetchUsers = async () => {
    const client = await pool.connect();
    try {
        const { rows } = await client.query('SELECT username, code FROM users');
        return rows;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    } finally {
        await client.release(); 
    }
};

module.exports = { fetchUsers };