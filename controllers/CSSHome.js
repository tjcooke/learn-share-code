const Methods = require('../models/methods');


async function CSSHome(req, res) {
    let CSSMethods = await Methods.getAll('CSS')
    // form here, use login as reference    
    CSSMethods = CSSMethods.filter((eaMethod)=>{
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

function CSSMethodPage(req, res) {
    res.send('hello ')
}

module.exports = { CSSHome, CSSPost, CSSMethodPage }



