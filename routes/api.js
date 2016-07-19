var express = require('express');
var router = express.Router();

var articleController = require('../controllers/articlecontroller.js');

/* GET home page. */
router.get('/getupdate/:timestamp', function(req, res, next) {

  articleController.getUpdatedArticles(1468500867, 1,
    function(err, articles) {
      console.log(articles);
      res.json(articles);
    }
  );

});

module.exports = router;
