const Methods = require('../models/methods');


async function NPMHome(req, res) {
    let NPMMethods = await Methods.getAll('NPM')

    NPMMethods = NPMMethods.filter((eaMethod)=>{
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

function NPMPost(req, res) {

    // if method exists, update content (snippet,desc,vid)
    // else, create new methods with various content

}

module.exports = { NPMHome, NPMPost }

