const Methods = require('../models/methods');
const Method_edits = require('../models/method_edits');
const Articles = require('../models/articles');
const Videos = require('../models/videos');


async function PYHome(req, res) {
    let PYMethods = await Methods.getAll('Python')
    PYMethods = PYMethods.filter((eaMethod) => {
        return eaMethod.display === 'True'
    })
    // form here, use login as reference    
    res.render('language-home', {
        locals: {
            language: 'Python',
            methods: PYMethods,
            message: "you're on the python homepage",
            redirect: "/Python"
        }
    });
}

// 

async function PYPost(req, res) {
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

        await Method_edits.add(theMethodToEdit.id, theMethodToEdit.method, 'Python', theMethodToEdit.description, theMethodToEdit.snippet, 'False')

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
        let PYMethods = await Methods.getAll('Python')
        // // form here, use login as reference    
        PYMethods = PYMethods.filter((eaMethod) => {
            return eaMethod.display === 'True'
        })
        res.render('language-home', {
            locals: {
                language: 'Python',
                methods: PYMethods,
                message: `You submited an edit for ${userInput.option1}.`,
                redirect: "/Python"
            }
        });
    } else if (userInput['method-selection'] === 'option2') {
        if (userInput.option2) {
            let response = await Method_edits.add(null, userInput.option2, 'Python', userInput.description, userInput.snippet, 'False')

            if (userInput.article) {
                let response2 = await Articles.add(null, userInput.option2, userInput.article, 'False')
            }
            if (userInput.video) {
                const embededURL = 'https://www.youtube.com/embed/'
                const videoURL = embededURL + userInput.video.substring(userInput.video.indexOf('=') + 1, userInput.video.length)
                await Videos.add(userInput.option2, videoURL, null, 'False')
            }
        }
        let PYMethods = await Methods.getAll('Python')
        // // form here, use login as reference    
        PYMethods = PYMethods.filter((eaMethod) => {
            return eaMethod.display === 'True'
        })
        res.render('language-home', {
            locals: {
                language: 'Python',
                methods: PYMethods,
                message: `You submited an edit for ${userInput.option2}.`,
                redirect: "/Python"
            }
        });
    }

    // if method exists, update content (snippet,desc,vid)
    // else, create new methods with various content

}

async function PYMethodPage(req, res) {
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
            res.redirect('/Python')
        }
    } else {
        res.redirect('/Python')
    }
}

module.exports = { PYHome, PYPost, PYMethodPage }




