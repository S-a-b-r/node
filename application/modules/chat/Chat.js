const { socket } = require("../../../settings");

class Chat {
    constructor({io, MESSAGES}){
        this.io = io;
        this.MESSAGES = MESSAGES;
        io.on('connection', soket=>{

            socket.on('')
            console.log('connected');
            socket.on('disconnect', ()=>{
                console.log('disconnected')
            })
        })
    }
    messages = [];

    addMessage(nick, message){
        return this.messages.push({'nick':nick, 'message':message});
    }

    updChat(){
        return this.messages;
    }
}
module.exports = Chat;