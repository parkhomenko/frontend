import mysql from 'mysql';

const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog',
    port: 3306
};

const pool = mysql.createPool(config);
pool.getConnection(function(err, connection) {
    //connected if no err is set
});

pool.on('error', function(err) {
    console.log(err.code);
});

export default pool;