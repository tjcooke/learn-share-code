const db = require('./db');

class Method_edits {
    constructor(id, method_id, language, method, description, snippet, display) {
            this.id = id,
            this.method_id = method_id,
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
            return data.id
        });
    }

    static getAll() {
        return db.any(`select * from method_edits`)
            .then((dataArray) => {
                return dataArray.map((data) => {
                    return new Method_edits(data.id, 
                    data.method_id,
                    data.language, data.method, data.description, data.snippet, data.display)

                })
            })
    }

    static getByMethod(name){
        return db.one(`select * from method_edits where method=$1`,name)
            .then((data)=>{
                return new Method_edits(data.id, data.language, data.method_id,data.method, data.description, data.snippet, data.display)
            })
    }


    static getById(id){
        return db.one(`select * from method_edits where id=$1`, id)
            .then((methodData) => {
                const methodInstance = new Method_edits(methodData.id, 
                    methodData.method_id,
                methodData.language, methodData.method, methodData.description, methodData.snippet, methodData.display)
                return methodInstance
        })
        .catch(() => {
            return null;
        })
    }
    static delete(id){
        return db.result('delete from method_edits where id=$1', id);
    }

}

module.exports = Method_edits;