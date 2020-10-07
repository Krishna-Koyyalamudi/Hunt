var authController = require('../controllers/AuthController.js');


module.exports = function (app, passport) {

    app.get('/register', authController.signup);


    app.get('/login', authController.signin);


    app.post('/register', passport.authenticate('local-register', {
        successRedirect: '/dashboard',
        failureRedirect: '/register'
    }
    ));


    app.get('/dashboard', authController.isLoggedIn, authController.dashboard);


    app.get('/logout', authController.logout);


    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/dashboard',
        failureRedirect: '/login'
    }
    ));

}