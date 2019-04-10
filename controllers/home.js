function homePage(req, res) {
    res.render('home', {
        locals: {
            email: '',
            message: "you're on the homepage"
        }
    });
};


module.exports = homePage;