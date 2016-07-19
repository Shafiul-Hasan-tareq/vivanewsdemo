var express = require('express');
var router = express.Router();

var articleController = require('../controllers/articlecontroller.js');

/* GET home page. */
router.get('/getupdate/:timestamp', function(req, res, next) {

  articleController.getUpdatedArticles(req.params.timestamp,
    function(err, articles) {
      res.json(articles);
    }
  );
});

module.exports = router;
