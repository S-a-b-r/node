/*В ноде все фаилы "закрытые"(каждый фаил замкнут сам в себе); 
Чтобы фаил делился чем-то наружу неоходимо использовать специальную конструкцию
module.exports _________;
Сокеты
on - установка соединения(клиент)
emit - обработка события(клиент)
для сервера наоборот
Сокеты любят ломаться!!!

*/
//ДЗ: Все сокеты в настройках. Перед подключением спросить имя, сохранить его. Выводить список пользвователей, чтобы можно было им отправлять. Бан,разбан пользователей. Сделать группы*.
const Calculator = require('./application/modules/calculator/Calculator');
const Chat = require('./application/modules/chat/Chat');
const Router = require('./application/router/Router');
const express = require('express');
    
const SETTINGS = require('./settings');


const {port, SOCKET} = SETTINGS;

const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

const calc = new Calculator();
const chat = new Chat({io, SOCKET});
const router = new Router({calc, chat});

app.use(express.static('public'));

app.use('/', router);

server.listen(port, () => {
    console.log(`Я родился`)
})


