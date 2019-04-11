const Methods = require('../models/methods');

async function HTMLHome(req, res) {
    const HTMLMethods = await Methods.getAll('HTML')
    // form here, use login as reference    
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

function HTMLMethodPage(req, res) {
    res.send('hello')
}

module.exports = { HTMLHome, HTMLPost, HTMLMethodPage }
