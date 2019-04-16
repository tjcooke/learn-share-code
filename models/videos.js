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
                    return new Videos(data.id, data.link, data.method_id, data.display)
                })
            })
    }
    static getById(id){
        return db.one(`select * from videos where id=$1`, id)
            .then((methodData) => {
                const methodInstance = new Videos(methodData.id, methodData.link, methodData.method_id, methodData.display)
                return methodInstance
        })
        .catch(() => {
            return null;
        })
    }

    static getByMethodName(name){
        return db.any(`select * from videos where method_name=$1`,name)
            .then((dataArray)=>{
                return dataArray.map((data)=>{
                    return new Videos(data.id, data.link, data.method_id, data.display)
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
    static getDisplayFalse(){
        db.any(`select * from videos where display='False'`)
            .then((dataArray)=>{
                return dataArray.map((data)=>{
                    return new Videos(data.id, data.link, data.method_id, data.display)
                })
            })
    }
    save(){
        // use .result when you might want a report about 
        // how many rows got affected
        return db.result(`
        update methods set
            link='${this.link}',
            method_id='${this.method_id}',
            display='${this.display}',
            where id = ${this.id}
        `)
    }
}

module.exports = Videos;