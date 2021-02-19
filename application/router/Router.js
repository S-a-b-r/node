const express = require('express');
const Answer = require('./Answer');
const router = express.Router();

function Router({calc}){

    const answer = new Answer();

    router.get('/hello', (req, res) => {
        res.send('Ты че делаеш?');
    })
    
    router.get('/calc',(req, res) => {
        const {x1, y1, z1, x2, y2, z2} = req.query;
        let oper = req.query['operation'];
        switch(oper){
            case '1': res.send( calc.vectMult(x1, y1, z1, x2, y2, z2));
            case '2': res.send( calc.scalMult(x1, y1, z1, x2, y2, z2));
            case '3': res.send( calc.plus(x1, y1, z1, x2, y2, z2));
            case '4': res.send( calc.minus(x1, y1, z1, x2, y2, z2));
        }
        res.send('error');
    })
    
    //app.all('/*', (req, res) => {
    //    res.send('404');
    //})
    
    router.get('/add/:a/:b', (req, res) => {
        const { a, b } = req.params;
        console.log(a + " " + b);
        res.send('' + ((a-0) + (b-0)));
    })

    return router;
}

module.exports = Router;