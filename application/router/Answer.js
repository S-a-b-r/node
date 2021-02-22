class Answer{
    
    ERROR = {
        404: 'Page not found',
        900: 'undefined error',
        5000: 'enter nickname and message',
        5001: 'unacceptable length nickname or message',
    }

    good(data){
        return{
            result:'ok',
            data
        }
    }
    bad(code){
        return{
            result:'error',
            error:{
                code,
                text:( code && this.ERROR[code])? this.ERROR[code] : this.ERROR[900],
            }
        }
    }
}
module.exports = Answer;