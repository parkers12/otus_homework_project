// 'use strict';
import mysql from "mysql2";
import dbConfig from "../config/db.config.mjs";

// // создаем соединение с нашей базой данных
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    port: dbConfig.PORT,
    database: dbConfig.DB,
    multipleStatements: true
});

export default connection;