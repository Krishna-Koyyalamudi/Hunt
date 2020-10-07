const express = require('express');
const router = express.Router();
const {authController} = require('./../controllers');


router.get('/login', authController.loginPage);

router.post('/login', authController.login);

router.get('/register', authController.register);

router.get('/forgot1', authController.forgot1);

router.get('/forgot2', authController.forgot2);

router.get('/forgot3', authController.forgot3);

router.get('/dashboard',authController.dashboard)

router.get('/leaderboard', authController.leaderboard);

router.get('/createScreen', authController.createscreen);

router.get('/createcompetition', authController.competition);

router.get('/createquest', authController.createquest)

router.get('/createteam', authController.createteam)

router.get('/inviteplayers',authController.inviteplayers)

router.get('/profile', authController.profile)


// rendering home page
router.get('/', function (req, res) {
    res.render('login', { layout: false })
});


module.exports = router;