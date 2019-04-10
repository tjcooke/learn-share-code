const db = require('./db');


class Articles {
    constructor (id, method_id, article){
        this.id = id,
        this.method_id = method_id,
        this.article = article
    }
    static getByMethod(methodID){
        db.any(`select * from articles where method_id=$1`,methodID)
            .then((dataArray)=>{
                return dataArray.map((data)=>{
                    return new Articles(data.id, data.method_id, data.article)
                })
            })
    }
}

module.exports = Articles;