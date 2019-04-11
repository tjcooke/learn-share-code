const db = require('./db');

class Methods {
    constructor(id, language, method, description, snippet, display){
        this.id = id,
        this.language = language,
        this.method = method,
        this.description = description,
        this.snippet = snippet,
        this.display = display

    }
    static getAll(language){
        return db.any(`select * from methods where language=$1`,language)
            .then((dataArray)=>{
                return dataArray.map((data)=>{

                    return new Methods(data.id, data.language, data.method, data.description, data.snippet, data.display)

                })
            })
    }
    static getByMethod(name){
        return db.one(`select * from methods where method='${name}'`)
            .then((data)=>{

                return new Methods(data.id, data.language, data.method, data.description, data.snippet, data.display)

            })
    }
    static getById(Id){
        return db.one(`select * from users where id=${id}`)
        .then((methodData) => {
            const methodInstance = new Methods(methodData.id, methodData.language, methodData.method, methodData.descriptionl, methodData.snippet)
            return methodInstance
        })
        .catch(() => {
            return null;
        })
    }
}

module.exports = Methods;