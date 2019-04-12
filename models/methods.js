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

    static add(method_id, method, language, description, snippet, display){
        return db.one(`
        insert into method_edits
        (method_id, method, language, description, snippet, display)
        values
        ($1, $2, $3, $4, $5, $6)
        returning id, method
        `, [method_id, method, language, description, snippet, display])
        .then((data)=>{
            console.log(data)
            return data.id
        });
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
        return db.one(`select * from methods where method='$1'`,name)
            .then((data)=>{


                return new Methods(data.id, data.language, data.method, data.description, data.snippet, data.display)
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
}

module.exports = Methods;