const Methods = require('../models/methods');
const Method_edits = require('../models/method.edits');
const Articles = require('../models/articles');
const Videos = require('../models/videos');

async function NPMHome(req, res) {
    let NPMMethods = await Methods.getAll('NPM')

    NPMMethods = NPMMethods.filter((eaMethod) => {
        return eaMethod.display === 'True'
    })
    // form here, use login as reference    
    res.render('language-home', {
        locals: {
            language: 'NPM',
            methods: NPMMethods,
            message: "you're on the NPM homepage",
            redirect: "/NPM"
        }
    });
}

// 
async function NPMPost(req, res) {

}


async function NPMMethodPage(req, res) {
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
            res.redirect('/NPM')
        }
    } else {
        res.redirect('/NPM')
    }
}

module.exports = { NPMHome, NPMPost, NPMMethodPage }

