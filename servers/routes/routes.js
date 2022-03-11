const mysql = require("mysql2");
const express = require('express');
const connection = require('../mode/deal.model');
const router = express.Router();
const app = express();

// router.get('/', appController.home);
// router.get('/about/', appController.about);
// router.get('/contacts/', appController.contacts);
// router.get('/feedback/', appController.feedback);

// router.get("/", function(req, res){
//     res.send("<h1>Главная страница</h1>");
// });

// router.get("/about", async(req, res) => {
//     try {
//         console.log(req.body)
//         const desc = "1";
//         const newUser = await pool.query(
//             'SELECT * FROM lu_actions',
//             [desc]
//         );
//         res.json(newUser);
//     } catch(err){
//         console.error(err.message)
//     }
// });

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'luckshimi2!W',
//     database: 'luckshimi'
// });

// работает
// const connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'luckshimi2!W',
//         port: 3306,
//         database: 'luckshimi'
//     });
   
// // получение списка пользователей
// router.get("/about", async(req, res) => {
//     connection.query(
//         "SELECT * FROM `lu__actions`",
//         function(err, results, fields) {
//             console.log(results);
//             console.log(fields);
//         }
//     );
// });

// router.get("/contact", function(req, res){
//     res.send("<h1>Контакты</h1>");
// });

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'luckshimi2!W',
//     port: 3306,
//     database: 'luckshimi'
//   })
  

  router.get("/about", async(req, res) => {
    connection.query(
        "SELECT * FROM `lu__actions`",
        function(err, results, fields) {
            console.log(results);
            console.log(fields);
        }
    );
});


module.exports = router;