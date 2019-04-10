const db = require('./db');


class Articles {
    constructor (id, method_id, article, display){
        this.id = id,
        this.method_id = method_id,
        this.article = article,
        this.display = display
    }
    static getByMethod(methodID){
        db.any(`select * from articles where method_id=$1`,methodID)
            .then((dataArray)=>{
                return dataArray.map((data)=>{
                    return new Articles(data.id, data.method_id, data.article, data.display)
                })
            })
    }
}

module.exports = Articles;