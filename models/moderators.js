const db = require('./db');

class Moderators{
    constructor (id, github_id, permission){
        this.id = id,
        this.github_id = github_id,
        this.permission = permission
    }
    static getByGithubID(githubID){
        return db.one(`select * from moderators where github_id=$1`,githubID)
            .then((data)=>{
                    return new Moderators(data.id, data.github_id, data.permission)
            })
        }
}


module.exports = Moderators;