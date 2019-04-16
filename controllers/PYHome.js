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

function PYPost(req, res) {

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




