const db = require('./db');


class Videos {
    constructor (id, link, method_id, display){
        this.id = id,
        this.link = link,
        this.method_id = method_id,
        this.display = display
    }
    static getByMethod(methodID){
        db.any(`select * from videos where method_id=$1`,methodID)
            .then((dataArray)=>{
                return dataArray.map((data)=>{
                    return new Videos(data.id,  data.link, data.method_id, data.display)
                })
            })
    }
}

module.exports = Videos;