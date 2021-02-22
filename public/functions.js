function calculate(x1,y1,z1,x2,y2,z2,oper){
    const promise = axios.get('/calc?x1='+x1+'&y1='+y1+'&z1='+z1+'&x2='+x2+'&y2='+y2+'&z2='+z2+'&operation='+oper);
    return promise.then((response) => {
        return response.data;
    });
}

function sendMessage(nickname, message){
    const promise = axios.get('/sendmessage?nick='+nickname+'&message='+message);
    return promise.then((response) => {
        return response.data;
    });
}