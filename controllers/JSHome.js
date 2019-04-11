
const Methods = require('../models/methods');
// gives javascript home view

async function JSHome(req, res) {
    const jsMethods = await Methods.getAll('JavaScript')
    // form here, use login as reference    
    res.render('language-home', {
        locals: {
            language: 'JavaScript',
            methods: jsMethods,
            message: "you're on the javascript view",
            redirect: "/JavaScript"
        }
    });
}


function JSPost(req, res) {

    // if method exists, update content (snippet,desc,vid)
    // else, create new methods with various content

}

async function JSMethodPage (req,res){
    let theMethod = await Methods.getById(req.params.id)
    console.log(theMethod)
    res.render('method',{
        locals: {
            language:theMethod.method,
            method:theMethod
        }
    })
}

module.exports = { JSHome, JSPost, JSMethodPage }