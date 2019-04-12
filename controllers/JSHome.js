
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
    

    if (userInput['method-selection'] === 'option1'){
        res.send('hello option1')
    }else if (userInput['method-selection'] === 'option2'){
        let response = await Methods.add(null,userInput.option2,'JavaScript',userInput.description,userInput.snippet,'False')

        let response2 = await Articles.add(null, userInput.option2, userInput.article, 'False')

        let response3 = await Videos.add(userInput.option2, userInput.video, null, 'False')

        res.send('you did it!')
    }
    

    res.send('hello')
    // if method exists, update content (snippet,desc,vid)
    // else, create new methods with various content

}

async function JSMethodPage (req,res){
    let theMethod = await Methods.getById(req.params.id)
    let theVideos = await Videos.getByMethod(req.params.id)
    theVideos = theVideos.filter((eaVideo)=>{
        return eaVideo.display === 'True'
    })
    console.log(theVideos)
    if(theMethod){
        if(theMethod.display === 'True'){
            res.render('method',{
                locals: {
                    language:theMethod.method,
                    method:theMethod,
                    videos:theVideos
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