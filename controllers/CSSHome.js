const Methods = require('../models/methods');
const Method_edits = require('../models/method_edits');
const Articles = require('../models/articles');
const Videos = require('../models/videos');


async function CSSHome(req, res) {
    let CSSMethods = await Methods.getAll('CSS')
    // form here, use login as reference    
    CSSMethods = CSSMethods.filter((eaMethod) => {
        return eaMethod.display === 'True'
    })
    res.render('language-home', {
        locals: {
            language: 'CSS',
            methods: CSSMethods,
            message: "you're on the CSS homepage",
            redirect: "/CSS"
        }
    });
}

// 

async function CSSPost(req, res) {
    const userInput = req.body
    console.log(userInput)
    if (userInput['method-selection'] === 'option1') {
        let theMethodToEdit = await Methods.getByMethod(req.body.option1)
        const userInputKeys = Object.keys(userInput)

        if (userInput.description) {
            theMethodToEdit.description = userInput.description
        }
        if (userInput.snippet) {
            theMethodToEdit.snippet = userInput.snippet
        }

        await Method_edits.add(theMethodToEdit.id, theMethodToEdit.method, 'CSS', theMethodToEdit.description, theMethodToEdit.snippet, 'False')

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
        let cssMethods = await Methods.getAll('CSS')
        // // form here, use login as reference    
        cssMethods = cssMethods.filter((eaMethod) => {
            return eaMethod.display === 'True'
        })
        res.render('language-home', {
            locals: {
                language: 'CSS',
                methods: cssMethods,
                message: `You submited an edit for ${userInput.option1}.`,
                redirect: "/CSS"
            }
        });
    } else if (userInput['method-selection'] === 'option2') {
        if (userInput.option2) {
            let response = await Method_edits.add(null, userInput.option2, 'CSS', userInput.description, userInput.snippet, 'False')

            if (userInput.article) {
                let response2 = await Articles.add(null, userInput.option2, userInput.article, 'False')
            }
            if (userInput.video) {
                const embededURL = 'https://www.youtube.com/embed/'
                const videoURL = embededURL + userInput.video.substring(userInput.video.indexOf('=') + 1, userInput.video.length)
                await Videos.add(userInput.option2, videoURL, null, 'False')
            }
        }
        let cssMethods = await Methods.getAll('CSS')
        // // form here, use login as reference    
        cssMethods = cssMethods.filter((eaMethod) => {
            return eaMethod.display === 'True'
        })
        res.render('language-home', {
            locals: {
                language: 'CSS',
                methods: cssMethods,
                message: `You submited an edit for ${userInput.option2}.`,
                redirect: "/CSS"
            }
        });
    }

    // if method exists, update content (snippet,desc,vid)
    // else, create new methods with various content

}

async function CSSMethodPage(req, res) {
    let theMethod = await Methods.getById(req.params.id)
    let theVideos = await Videos.getByMethod(req.params.id)
    theVideos = theVideos.filter((eaVideo) => {
        return eaVideo.display === 'True'
    })
    console.log(theVideos)
    if (theMethod) {
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
            res.redirect('/CSS')
        }
    } else {
        res.redirect('/CSS')
    }
}

module.exports = { CSSHome, CSSPost, CSSMethodPage }



