const express = require('express');
const Answer = require('./Answer');
const router = express.Router();

function Router({calc, chat}){

    const answer = new Answer();

    router.get('/hello', (req, res) => {
        res.send(answer.good('Ты че делаеш?'));
    })

    router.get('/sendmessage',(req, res)=>{
        const nick = req.query['nick'];
        const message = req.query['message'];
        if(nick && message){
            if((nick.length < 3)|| (nick.length>15) || (message.length > 30)){
                res.send(answer.bad('5001'));
            }
            else if(nick == 'connect' && message == 'connect'){
                res.send(answer.good(chat.updChat()));
            }
            else{
                chat.addMessage(req.query['nick'], req.query['message']);
                res.send(answer.good(chat.updChat()));
            }
        }
        else{
            res.send(answer.bad('5000'));
        }
    })
    
    router.get('/calc',(req, res) => {
        const {x1, y1, z1, x2, y2, z2} = req.query;
        let oper = req.query['operation'];
        switch(oper){
            case '1': res.send( answer.good(calc.vectMult(x1, y1, z1, x2, y2, z2)));
            case '2': res.send( answer.good(calc.scalMult(x1, y1, z1, x2, y2, z2)));
            case '3': res.send( answer.good(calc.plus(x1, y1, z1, x2, y2, z2)));
            case '4': res.send( answer.good(calc.minus(x1, y1, z1, x2, y2, z2)));
        }
        res.send(answer.bad('401'));
    })
    
    //app.all('/*', (req, res) => {
    //    res.send('404');
    //})
    
    router.get('/add/:a/:b', (req, res) => {
        const { a, b } = req.params;
        console.log(a + " " + b);
        res.send(answer.good('' + ((a-0) + (b-0)) ));
    })

    return router;
}

module.exports = Router;