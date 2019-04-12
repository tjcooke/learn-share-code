
const Methods = require('../models/methods');
// gives javascript home view

async function JSHome(req, res) {
    let jsMethods = await Methods.getAll('JavaScript')
    // form here, use login as reference    
    jsMethods = jsMethods.filter((eaMethod)=>{
        return eaMethod.display === 'True'
    })
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
    if(theMethod){
        if(theMethod.display === 'True'){
            res.render('method',{
                locals: {
                    language:theMethod.method,
                    method:theMethod
                }
            })
        }else{
            res.redirect('/JavaScript')
        }
    }else{
        res.redirect('/JavaScript')
    }
}

module.exports = { JSHome, JSPost, JSMethodPage }