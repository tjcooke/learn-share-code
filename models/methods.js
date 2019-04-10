const db = require('./db');

class Methods {
    constructor(id, language, method, description, snippet){
        this.id = id,
        this.language = language,
        this.method = method,
        this.description = description,
        this.snippet = snippet
    }
    static getAll(language){
        return db.any(`select * from methods where language=$1`,language)
            .then((dataArray)=>{
                return dataArray.map((data)=>{
                    return new Methods(data.id, data.language, data.method, data.description, data.snippet)
                })
            })
    }
    static getByMethod(name){
        return db.one(`select * from methods where method=${name}`)
            .then((data)=>{
                return new Methods(data.id, data.language, data.method, data.description, data.snippet)
            })
    }
}

module.exports = Methods;