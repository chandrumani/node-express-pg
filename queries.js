const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'pgdatabase',
    password: 'password',
    port: 5432
})
