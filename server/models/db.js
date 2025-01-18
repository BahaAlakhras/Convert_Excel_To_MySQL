const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "127.0.0.1", // Use the correct host (localhost or 127.0.0.1)
  user: "root", // Default XAMPP MySQL user is "root"
  password: "", // Default XAMPP MySQL password is empty
  database: "bahabd", // Replace with your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
