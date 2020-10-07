const sqlite = require('sqlite3');
const md5 = require('md5');

const db = new sqlite.Database('db.sqlite');

var exports = module.exports = {}

exports.loginPage = function (req, res) {
    res.render('login', { layout: false });
}

exports.register = function (req, res) {
    res.render('signup', { layout: false });
}

exports.forgot1 = function (req, res) {
    res.render('forgotemail', { layout: false });
}

exports.forgot2 = function (req, res) {
    res.render('forgotcode', { layout: false });
}

exports.forgot3 = function (req, res) {
    res.render('forgotnewpass', { layout: false });
}

exports.layout = function(req,res){
	res.render('layout'); 
}

exports.competition = function (req, res) {
    res.render('createcompetition')
}

exports.createquest = function (req, res) {
    res.render('createquest')
}

exports.createteam = function (req, res) {
    res.render('createteam')
}

exports.leaderboard = function (req, res) {
    res.render('leaderboard')
}

exports.createscreen = function (req, res) {
    res.render('createscreen')
}

exports.inviteplayers = function (req, res) {
    res.render('inviteplayers')
}

exports.profile = function (req, res) {
    res.render('profile')
}

exports.dashboard = function (req, res) {
    res.render('index')
}

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
}

exports.login = (req, res) => {
    let { email, password } = req.body;
    let error = null;
    db.get('select * from user where email = ? and password = ?', [email, md5(password)], (err, response) => {
        if (err) {
            console.error('Error trying to login', err);
            error = 'Error trying to login to application';
            res.render('login', { error: error });
        } else if (!err && !response) {
            error = `Username and password combinations doesn't exists`;
            res.render('login', { error: error });
        } else {
            res.render('dashboard');
        }
        console.log(err, res);
    })
}
// ---------------- Authentication Related Utility Functions (authen session, roles, etc ...) ----------------------

exports.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        req.flash('error', 'Please Sign in first!');
        res.redirect('/login');
    }
}