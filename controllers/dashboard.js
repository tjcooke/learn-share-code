const Method_edits = require('../models/method_edits')
const Videos = require('../models/videos')
const Methods = require('../models/methods')
const Articles = require('../models/articles')


async function dashboardPage(req, res) {
    const clientID = process.env.client_id

    console.log(`inside dashboardPage func ${clientID}`)

    let methodEdits = await Method_edits.getAll()
    let videoEdits = await Videos.getDisplayFalse()
    let articleEdits = await Articles.getDisplayFalse()
    res.render('dashboard', {
        locals: {
            methodsEdits: methodEdits,
            videos: videoEdits,
            articles: articleEdits
        }
    })
}

async function dashboardMethod(req, res) {
    let method = await Method_edits.getById(req.params.id)
    console.log(method)
    let videos = await Videos.getByMethodName(method.method)
    console.log(videos)
    videos = videos.filter((eaVideo) => {
        return eaVideo.display === 'False'
    })
    res.render('dashboard-method', {
        locals: {
            method: method,
            videos: videos
        }
    })
}




async function dashboardPost(req, res) {
    console.log(req.body)
    const {methodNameSelect, methodName, descriptionSelect, description, snippetSelect, snippet, methodID} = req.body


    const theMethod = await Methods.getByMethod(methodName)
    if (theMethod) {
        if (descriptionSelect === 'on') {
            theMethod.description = description
        }
        if (snippetSelect === 'on') {
            theMethod.snippet = snippet
        }
    theMethod.save()
    }else{
        const newMethod = await Method_edits.getById(methodID)

        const theDescription = null
        const theSnippet = null
        if (descriptionSelect === 'on') {
            theDescription = description
        } if (snippetSelect === 'on') {
            theSnippet = snippet
        }

        // add new method to database
        await Methods.add(newMethod.language, newMethod.method, theDescription, theSnippet, 'True')
    }

    const inputKeys = Object.keys(req.body)

    for (let i = 2; i < inputKeys.length; i++){
        let videoSelect = inputKeys[i].indexOf('videoSelect')
        if (videoSelect >= 0){
            if (req.body[`${inputKeys[i]}`] === 'on'){
                console.log(inputKeys[i+1])
                let videoID = inputKeys[i+1].substring(inputKeys[i+1].indexOf(':') + 1, inputKeys[i+1].length)
                console.log('AWAIT videos.GETBYID(id)')
                console.log(videoID)
                let theVideo = await Videos.getById(videoID)
                theVideo.display = 'True'
                console.log('SAVING')
                await theVideo.save()
            }
        }
        if(inputKeys[i].indexOf('videoURL') >= 0){
            console.log('VIDEO DELETE')
            let videoID = inputKeys[i].substring(inputKeys[i].indexOf(':') + 1, inputKeys[i].length)
            let theVideo = await Videos.getById(videoID)
            if (theVideo){
                if(theVideo.display === 'False'){
                    await Videos.delete(theVideo.id)
                }
        }
        }
    }
    console.log(methodID)
    await Method_edits.delete(methodID)
    res.redirect('/dashboard')
}

module.exports =  {dashboardPage, dashboardPost, dashboardMethod} ;

