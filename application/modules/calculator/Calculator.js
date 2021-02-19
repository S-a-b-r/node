class Calculator {
    vectMult(x1, y1, z1, x2, y2, z2){
        const x = (y1-0)*(z2-0) - (z1-0)*(y2-0);
        const y = (z1-0)*(x2-0) - (x1-0)*(z2-0);
        const z = (x1-0)*(y2-0) - (y1-0)*(x2-0);
        return 'x: ' + x + ' y: ' + y + ' z: ' + z;
    }
    
    scalMult(x1, y1, z1, x2, y2, z2){
        const x = (x1-0) * (x2-0);
        const y = (y1-0) * (y2-0);
        const z = (z1-0) * (z2-0);
        return 'scal mult = '+ (x+y+z);
    }
    plus(x1, y1, z1, x2, y2, z2){
        const x = (x1-0) + (x2-0);
        const y = (y1-0) + (y2-0);
        const z = (z1-0) + (z2-0);
        return 'x: ' + x + ' y: ' + y + ' z: ' + z;
    }
    minus(x1, y1, z1, x2, y2, z2){
        const x = (x1-0) - (x2-0);
        const y = (y1-0) - (y2-0);
        const z = (z1-0) - (z2-0);
        return 'x: ' + x + ' y: ' + y + ' z: ' + z;
    }
}

module.exports = Calculator;