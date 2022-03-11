// 'use strict';
const mysql = require("mysql2");
const dbConfig = require("../config/db.config");
  
// // создаем соединение с нашей базой данных
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    port: dbConfig.PORT,
    database: dbConfig.DB
});

module.exports = connection;