const db = require('./db');

class Notes{
    constructor (id, user_id, comment, method_id){
        this.id = id,
        this.user_id = user_id,
        this.comment = comment,
        this.method_id = method_id
    }
    static getByMethod(methodID){
        db.any(`select * from notes where method_id=$1`,methodID)
            .then((dataArray)=>{
                return dataArray.map((data)=>{
                    return new Notes(data.id, data.user_id, comment, method_id)
                })
            })
    }
}

module.exports = Notes;