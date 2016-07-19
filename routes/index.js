var express = require('express');
var router = express.Router();

var articleController = require('../controllers/articlecontroller.js');

/* GET home page. */
router.get('/', function(req, res, next) {

  articleController.getHomePageArticles(
    function(err, articles) {

      res.render('index', {
        'title': 'News demo',
        'data': articles
      });
    });

});

module.exports = router;
