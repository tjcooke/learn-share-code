const Methods = require('../models/methods');


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

async function NPMMethodPage(req, res) {
    let theMethod = await Methods.getById(req.params.id)
    if (theMethod) {
        console.log(theMethod.display)
        if (theMethod.display === 'True') {
            res.render('method', {
                locals: {
                    language: theMethod.method,
                    method: theMethod
                }
            })
        } else {
            res.redirect('/NPM')
        }
    } else {
        res.redirect('/NPM')
    }
}

module.exports = { NPMHome, NPMPost }

