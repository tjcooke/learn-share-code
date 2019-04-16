const db = require('./db');

class Methods {
    constructor(id, language, method, description, snippet, display) {
            this.id = id,
            this.language = language,
            this.method = method,
            this.description = description,
            this.snippet = snippet,
            this.display = display

    }

    static getAll(language) {
        return db.any(`select * from methods where language=$1`, language)
            .then((dataArray) => {
                return dataArray.map((data) => {
                    return new Methods(data.id, data.language, data.method, data.description, data.snippet, data.display)

                })
            })
    }

    static getByMethod(name){
        return db.one(`select * from methods where method=$1`,name)
            .then((data)=>{
                return new Methods(data.id, data.language, data.method, data.description, data.snippet, data.display)
            })
            .catch(()=>{
                return null
            })
    }


    static getById(id){
        return db.one(`select * from methods where id=$1`, id)
            .then((methodData) => {
                const methodInstance = new Methods(methodData.id, methodData.language, methodData.method, methodData.description, methodData.snippet, methodData.display)
                return methodInstance
        })
        .catch(() => {
            return null;
        })
    }
    save(){
        // use .result when you might want a report about 
        // how many rows got affected
        return db.result(`
        update methods set
            language='${this.language}',
            method='${this.method}',
            description='${this.description}',
            snippet='${this.snippet}'
            where id = ${this.id}
        `)
    }
    static add(language, method, description, snippet, display){
        return db.one(`
        insert into methods
        (language, method, description, snippet, display)
        values
        ($1, $2, $3, $4, $5)
        returning id
        `, [language, method, description, snippet, display])
        .then((data)=>{
            return data
        });
    }
}

module.exports = Methods;