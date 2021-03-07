//Калькулятор
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
    promise.then(updResult);
})

function updResult(data){
    let result = document.getElementById('res');
    if(data.data){
        result.innerHTML = data.data;
    }
    else{
        console.log = data.error;
    }
}

//Чат
let userName = document.getElementById('inUserName');
let message = document.getElementById('inMessage');

let butSendMessage = document.getElementById('butSendMessage');

butSendMessage.addEventListener('click',()=>{
    const promise = sendMessage(userName.value, message.value);
    promise.then(updChat);
})

function updChat(data){
    let chat = document.getElementById('chat');
    if(data.data){
        chat.innerHTML = '';
        for(let i = (data.data.length>19) ? data.data.length-19 : 0; i < data.data.length; i++){
            chat.innerHTML += data.data[i].nick + ': '+ data.data[i].message +' <br>';
        }
    }
    else{
        alert(data.error['text']);
    }
}



window.onload = function(){
    const {HOST, PORT, MESSAGES} = SETTINGS;
    
    const socket = io("http://localhost:3001");
    const promise = sendMessage('connect', 'connect');
    promise.then(updChat);
}


