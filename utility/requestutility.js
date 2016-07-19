var mongoose = require('mongoose');
require('../models/article.js');

var Article = mongoose.model("Article");


module.exports = {
  convertArticleFromRequest: function(req) {

    return new Article(req.body);

  },
  isUserAlreadyLoggedIn: function(req) {

    var cookie = req.cookies.loggedin;
    return (cookie !== undefined);

  }
};
