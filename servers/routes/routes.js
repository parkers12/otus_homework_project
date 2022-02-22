const express = require('express');
const router = express.Router();

router.get("/", function(request, response){
    response.send("<h1>Главная страница</h1>");
});

router.get("/about", function(request, response){
    response.send("<h1>О сайте</h1>");
});

router.get("/contact", function(request, response){
    response.send("<h1>Контакты</h1>");
});

module.exports = router;