var express = require('express');
var router = express.Router();

var usersController = require('../controllers/userscontroller.js');
var responseUtility = require('../utility/requestutility.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

  if (responseUtility.isUserAlreadyLoggedIn()) {
    res.redirect('/articles/1');
  } else {
    // TODO use the login template
  }
});

router.post('/', function(req, res, next) {

  if (usersController.canUserLogin(req.body.username, req.body.password)) {
    // TODO sets the login cookies
    res.cookie('loggedin', 'yes', {
      maxAge: 9000,
      httpOnly: false
    });

    res.redirect('/articles/1');
  } else {
    res.redirect('/index');
  }
});

module.exports = router;
