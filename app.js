/*В ноде все фаилы "закрытые"(каждый фаил замкнут сам в себе); 
Чтобы фаил делился чем-то наружу неоходимо использовать специальную конструкцию
module.exports _________;
*/
//ДЗ: добавить модуль Чата
const Calculator = require('./application/modules/calculator/Calculator');
const Router = require('./application/router/Router');
const express = require('express');
const SETTINGS = require('./settings');

const port = SETTINGS['PORT'];

const app = express();
const calc = new Calculator();
const router = new Router({calc});

app.use(express.static('public'));

app.use('/', router);

app.listen(port, () => {
    console.log(`Я родился`)
})


