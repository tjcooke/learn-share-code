
function NPMHome(req, res) {
    // form here, use login as reference    
    res.render('home', {
        locals: {
            email: '',
            message: "you're on the homepage",
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

