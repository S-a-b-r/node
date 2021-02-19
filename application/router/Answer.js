class Answer{
    
    ERROR = {
        404: 'Page not found',
        900: 'undefined error'
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