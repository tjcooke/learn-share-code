
function CSSHome(req, res) {
    // form here, use login as reference    
    res.render('home', {
        locals: {
            email: '',
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

module.exports = { CSSHome, CSSPost }


