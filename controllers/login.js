const User = require('../models/users');
const escapeHtml = require('../utils');

function loginPage(req, res) {
    res.render('login-form', {
        locals: {
            email: '',
            message: ''
        }
    });
};

const loginPost = async (req, res) => {

    const theEmail = escapeHtml(req.body.email);
    const thePassword = escapeHtml(req.body.password)

    const newUser = await User.getByEmail(theEmail);

    if (newUser.checkPassword(thePassword)) {
        req.session.user = newUser.id;
        req.session.save(() => {
            res.redirect('/');
        });
    } else {
        res.render('login-form', {
            locals: {
                email: theEmail,
                message: "ACCESS DENIED"
            }
        });
    };
};


module.exports = { loginPage, loginPost }