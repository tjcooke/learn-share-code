const Method_edits = require('../models/method_edits')
const Videos = require('../models/videos')
const Methods = require('../models/methods')
const Articles = require('../models/articles')

async function dashboardPage(req,res){
    let methodEdits = await Method_edits.getAll()
    let videoEdits = await Videos.getDisplayFalse()
    let articleEdits = await Articles.getDisplayFalse()
    res.render('dashboard',{
        locals:{
            methodsEdits:methodEdits,
            videos:videoEdits,
            articles:articleEdits
        }
    })
}

async function dashboardMethod(req,res){
    let method = await Method_edits.getById(req.params.id)
    console.log(method)
    let videos = await Videos.getByMethodName(method.method)
    console.log(videos)
    videos = videos.filter((eaVideo)=>{
        return eaVideo.display === 'False'
    })
    res.render('dashboard-method',{
        locals:{
            method:method,
            videos:videos

        }
    })

}




async function dashboardPost (req,res){
    console.log(req.body)
    const {methodNameSelect, methodName, descriptionSelect, description, snippetSelect, snippet} = req.body

    const theMethod = await Methods.getByMethod(methodName)
    if (theMethod){
        if (descriptionSelect === 'on'){
            theMethod.description = description
        }
        if (snippetSelect === 'on'){
            theMethod.snippet = snippet
        }
    // save theMethod to database
    }else{
        const newMethod = await Method_edits.getByMethodName(methodName)
        const theDescription = null
        const theSnippet = null
        if (descriptionSelect === 'on'){
            theDescription = description
        } if(snippetSelect === 'on'){
            theSnippet = snippet
        }

        // add new method to database
    }

    const inputKeys = Object.keys(req.body)
    for (let i = 3; i < inputKeys.length; i++){
        if (req.body[`${inputKeys[i]}`] === 'on'){
            req.body[`${inputKeys[i+1]}`]
            // add the video to the videos 'display TRUE'
        }
    }
    // remove from database if video display 'False'
    // remove from method_edits regardless
    res.redirect('/dashboard')
}

module.exports =  {dashboardPage, dashboardPost, dashboardMethod} ;