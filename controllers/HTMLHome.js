const Methods = require('../models/methods');

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

function HTMLPost(req, res) {

    // if method exists, update content (snippet,desc,vid)
    // else, create new methods with various content

}

async function HTMLMethodPage(req, res) {
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
            res.redirect('/HTML')
        }
    } else {
        res.redirect('/HTML')
    }
}

module.exports = { HTMLHome, HTMLPost, HTMLMethodPage }
