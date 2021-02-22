class Chat {
    messages = [];

    addMessage(nick, message){
        return this.messages.push({'nick':nick, 'message':message});
    }

    updChat(){
        return this.messages;
    }
}
module.exports = Chat;