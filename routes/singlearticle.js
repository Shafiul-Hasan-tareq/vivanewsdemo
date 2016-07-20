var express = require('express');
var router = express.Router();

var articleController = require('../controllers/articlecontroller.js');

/* GET home page. */
router.get('/:id', function(req, res, next) {

  articleController.getArticleByID(req.params.id, function(err, _article) {

    res.render('singlearticle', {
      title: 'Telesome News',
      article: _article
    });
  });

});

module.exports = router;
