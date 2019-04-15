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
    static add(method_id, method_name, article, display){
        return db.one(`
        insert into articles
        (method_id, method_name, article, display)
        values
        ($1, $2, $3, $4)
        returning id, article
        `, [method_id,method_name, article, display])
        .then((data)=>{

            return data.id
        });
    }
}

module.exports = Articles;