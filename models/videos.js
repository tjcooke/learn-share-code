const db = require('./db');


class Videos {
    constructor (id, link, method_id, display){
        this.id = id,
        this.link = link,
        this.method_id = method_id,
        this.display = display
    }
    static getByMethod(methodID){
        return db.any(`select * from videos where method_id=$1`,methodID)
            .then((dataArray)=>{
                return dataArray.map((data)=>{
                    return new Videos(data.id,  data.link, data.method_id, data.display)
                })
            })
    }
    static add(method_name, link, method_id, display){
        return db.one(`
        insert into videos
        (method_name, link, method_id, display)
        values
        ($1, $2, $3, $4)
        returning id, method_name
        `, [method_name, link, method_id, display])
        .then((data)=>{

            return data.id
        });
    }
}

module.exports = Videos;