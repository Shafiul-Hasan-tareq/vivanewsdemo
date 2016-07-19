var mongoose = require('mongoose');
require('../models/article.js');

var Article = mongoose.model("Article"),
  ObjectId = mongoose.Types.ObjectId;

var __ = require('lodash');
var ArticleController = function() {

};

ArticleController.prototype = {

  getUpdatedArticles: function(updatedTimestamp, category, callbacks) {
    return Article.find()
      .where('updatedat').gt(updatedTimestamp)
      .sort({
        "updatedat": 1
      }).exec(
        function(err, articles) {
          callbacks(err, articles);
        }
      );
  },

  addArticle: function(article, next) {

    article.save(function(err, screenshot) {

      if (typeof next === "function") {
        next(err, screenshot);
      }

    });
  },

  getArticleByID: function(articleid, callbacks) {

    Article.findById(new ObjectId(articleid), function(err,
      article) {
      callbacks(err, article);
    });

  },

  updateArticle: function(articleid, article, callbacks) {
    Article.findById(new ObjectId(articleid), function(err, _article) {
      if (err) {
        console.log("Error occured #1 " + err);
        callbacks(err, NULL);

      } else {

        _article.title = article.title;
        _article.articledetails = article.articledetails;
        _article.articledetailstext = article.articledetailstext;
        _article.articleimage = article.articleimage;
        _article.author = article.author;
        _article.updatedat = Date.now();

        _article.save(function(error, tarticle) {
          callbacks(err, tarticle);
        });
      }
    });
  },

  getArticleList: function(category, pagenumber, itemsperpage, callbacks) {

    return Article.find({
        "category": category
      }).sort({
        "updatedat": 1
      }).skip((pagenumber - 1) * itemsperpage)
      .limit(itemsperpage).exec(
        function(err, articles) {
          callbacks(err, articles);
        }
      );
  }

};


module.exports = new ArticleController();
