var express = require('express');
var router = express.Router();

var articleController = require('../controllers/articlecontroller.js');
var responseUtility = require('../utility/requestutility.js');

/* GET users listing. */
router.get('/:catid', function(req, res, next) {

  articleController.getArticleList(req.params.catid, 1, 100,
    function(err, articles) {

      res.render('articles', {
        'title': 'News demo',
        'category': req.params.catid,
        'data': articles
      });

    });
});

router.post('/', function(req, res, next) {
  var tempreq = req;
  var temparticle = responseUtility.convertArticleFromRequest(req);

  if (req.body.articleid) {

    articleController.updateArticle(req.body.articleid, temparticle,
      function(err, article) {
        res.redirect('/articles/' + req.body.category);
      }
    );

  } else {

    articleController.addArticle(temparticle,
      function(err, article) {
        res.redirect('/articles/' + req.body.category);
      }
    );
  }

});


router.get('/:catid/:id', function(req, res, next) {

  if (req.params.id == -1) {

    res.render('article', {
      title: 'Add Article',
      'category': req.params.catid,
      'article': null
    });

  } else {

    articleController.getArticleByID(req.params.id, function(err, _article) {

      console.log("I am fine now");
      console.log(_article);

      res.render('article', {
        title: 'Add Article',
        category: req.params.catid,
        article: _article
      });
    });

  }


});

module.exports = router;
