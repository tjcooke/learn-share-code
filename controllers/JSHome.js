
// gives javascript home view

function JSHome(req, res) {
    // form here, use login as reference    
    res.render('home', {
        locals: {
            email: '',
            message: "you're on the homepage"
        }
    });
}

// 

function JSPost(req, res) {

    // if method exists, update content (snippet,desc,vid)
    // else, create new methods with various content

}

module.exports = { JSHome, JSPost }