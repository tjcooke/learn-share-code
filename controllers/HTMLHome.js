const Methods = require('../models/methods');
const Method_edits = require('../models/method_edits')
const Articles = require('../models/articles');
const Videos = require('../models/videos');
const escapeHTML = require('../utils')

async function HTMLHome(req, res) {
    let HTMLMethods = await Methods.getAll('HTML')
    // form here, use login as reference   
    HTMLMethods = HTMLMethods.filter((eaMethod) => {
        return eaMethod.display === 'True'
    })
    res.render('language-home', {
        locals: {
            language: 'HTML',
            methods: HTMLMethods,
            message: "you're on the HTML homepage",
            redirect: "/HTML"
        }
    });
}

// 

async function HTMLPost(req, res) {
    const userInput = req.body
    const breakMethod = escapeHTML(userInput.option2)
    console.log(userInput)
    if (userInput['method-selection'] === 'option1') {
        let theMethodToEdit = await Methods.getByMethod(req.body.option1)
        const userInputKeys = Object.keys(userInput)

        if (userInput.description) {
            theMethodToEdit.description = escapeHTML(userInput.description)
        }
        if (userInput.snippet) {
            theMethodToEdit.snippet = escapeHTML(userInput.snippet)
        }

        await Method_edits.add(theMethodToEdit.id, theMethodToEdit.method, 'HTML', theMethodToEdit.description, theMethodToEdit.snippet, 'False')

        if (userInput.article) {
            await Articles.add(theMethodToEdit.id, userInput.option1, userInput.article, 'False')
        }
        console.log('yup')
        if (userInput.video) {
            const embededURL = 'https://www.youtube.com/embed/'
            const videoURL = embededURL + userInput.video.substring(userInput.video.indexOf('=') + 1, userInput.video.length)
            console.log(videoURL)
            await Videos.add(userInput.option1, videoURL, theMethodToEdit.id, 'False')
        }

        // res.send('yeup')
        let htmlMethods = await Methods.getAll('HTML')
        // // form here, use login as reference    
        htmlMethods = htmlMethods.filter((eaMethod) => {
            return eaMethod.display === 'True'
        })
        res.render('language-home', {
            locals: {
                language: 'HTML',
                methods: htmlMethods,
                message: `You submited an edit for ${userInput.option1}.`,
                redirect: "/HTML"
            }
        });
    } else if (userInput['method-selection'] === 'option2') {
        if (userInput.option2) {
            let response = await Method_edits.add(null, breakMethod, 'HTML', userInput.description, userInput.snippet, 'False')

            if (userInput.article) {
                let response2 = await Articles.add(null, breakMethod, userInput.article, 'False')
            }
            if (userInput.video) {
                const embededURL = 'https://www.youtube.com/embed/'
                const videoURL = embededURL + userInput.video.substring(userInput.video.indexOf('=') + 1, userInput.video.length)
                await Videos.add(breakMethod, videoURL, null, 'False')
            }
        }
        let htmlMethods = await Methods.getAll('HTML')
        // // form here, use login as reference    
        htmlMethods = htmlMethods.filter((eaMethod) => {
            return eaMethod.display === 'True'
        })
        res.render('language-home', {
            locals: {
                language: 'HTML',
                methods: htmlMethods,
                message: `You submited an edit for ${breakMethod}.`,
                redirect: "/HTML"
            }
        });
    }

    // if method exists, update content (snippet,desc,vid)
    // else, create new methods with various content

}

async function HTMLMethodPage(req, res) {
    let theMethod = await Methods.getById(req.params.id)
    console.log('THIS IS THE METHOD')
    console.log(theMethod)
    console.log(req.params.id)
    let theVideos = await Videos.getByMethod(req.params.id)
    theVideos = theVideos.filter((eaVideo) => {
        return eaVideo.display === 'True'
    })
    console.log(theVideos)
    if (theMethod) {
        if(theMethod.description){
            theMethod.description = escapeHTML(theMethod.description)
        }
        console.log(theMethod.display)
        if (theMethod.display === 'True') {
            res.render('method', {
                locals: {
                    language: theMethod.method,
                    method: theMethod,
                    videos: theVideos
                }
            })
        } else {
            res.redirect('/HTML')
        }
    } else {
        res.redirect('/HTML')
    }
}

module.exports = { HTMLHome, HTMLPost, HTMLMethodPage }
