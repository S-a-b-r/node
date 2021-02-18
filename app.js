const express = require('express');
const app = express();
const port = 3001;

app.get('/hello', (req, res) => {
    res.send('Катюха, ты че делаеш?')
})

app.get('/calc',(req, res) => {
    const {x1, y1, z1, x2, y2, z2} = req.query;
    let oper = req.query['operation'];
    switch(oper){
        case '1': res.send(vectMult(x1, y1, z1, x2, y2, z2));
        case '2': res.send(scalMult(x1, y1, z1, x2, y2, z2));
        case '3': res.send(plus(x1, y1, z1, x2, y2, z2));
        case '4': res.send(minus(x1, y1, z1, x2, y2, z2));
    }
    res.send('error');
})

//app.all('/*', (req, res) => {
//    res.send('404');
//})

app.get('/add/:a/:b', (req, res) => {
    const { a, b } = req.params;
    console.log(a + " " + b);
    res.send('' + ((a-0) + (b-0)));
})

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Я родился`)
})


function vectMult(x1, y1, z1, x2, y2, z2){
    const x = (y1-0)*(z2-0) - (z1-0)*(y2-0);
    const y = (z1-0)*(x2-0) - (x1-0)*(z2-0);
    const z = (x1-0)*(y2-0) - (y1-0)*(x2-0);
    return 'x: ' + x + ' y: ' + y + ' z: ' + z;
}

function scalMult(x1, y1, z1, x2, y2, z2){
    const x = (x1-0) * (x2-0);
    const y = (y1-0) * (y2-0);
    const z = (z1-0) * (z2-0);
    return 'scal mult = '+ (x+y+z);
}
function plus(x1, y1, z1, x2, y2, z2){
    const x = (x1-0) + (x2-0);
    const y = (y1-0) + (y2-0);
    const z = (z1-0) + (z2-0);
    return 'x: ' + x + ' y: ' + y + ' z: ' + z;
}
function minus(x1, y1, z1, x2, y2, z2){
    const x = (x1-0) - (x2-0);
    const y = (y1-0) - (y2-0);
    const z = (z1-0) - (z2-0);
    return 'x: ' + x + ' y: ' + y + ' z: ' + z;
}