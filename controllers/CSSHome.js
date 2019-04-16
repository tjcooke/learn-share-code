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

function CSSPost(req, res) {

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



