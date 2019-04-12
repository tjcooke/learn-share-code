
const Methods = require('../models/methods');
const Articles = require('../models/articles');
const Videos = require('../models/videos');
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

async function JSPost(req, res) {
    const userInput = req.body
    
    console.log(userInput)
    if (userInput['method-selection'] === 'option1'){
        res.send('hello option1')
    }else if (userInput['method-selection'] === 'option2'){
        let response = await Methods.add(null,userInput.option2,'JavaScript',userInput.description,userInput.snippet,'False')
        console.log(response)
        console.log('===========')
        let response2 = await Articles.add(null, userInput.option2, userInput.article, 'False')
        console.log(response2)
        let response3 = await Videos.add(userInput.option2, userInput.video, null, 'False')
        console.log(response3)
        res.send('you did it!')
    }
    

    res.send('hello')
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