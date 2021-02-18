let x1 = document.getElementById("inX1");
let y1 = document.getElementById("inY1");
let z1 = document.getElementById("inZ1");

let x2 = document.getElementById("inX2");
let y2 = document.getElementById("inY2");
let z2 = document.getElementById("inZ2");

let operation = document.getElementById("selOper");

let calc = document.getElementById("butCalc");

calc.addEventListener('click',() => {
    const promise = calculate(x1.value, y1.value, z1.value, x2.value, y2.value, z2.value, operation.value);
    promise.then(onDataReceived);
})

function onDataReceived(data){
    let result = document.getElementById('res');
    result.innerHTML = data;
}