var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  articleimage: String,

  author: {
    type: String,
    required: true
  },

  articledetails: {
    type: String,
    required: true
  },

  articledetailstext: {
    type: String,
    required: true
  },

  category: {
    type: Number,
    required: true,
    "default": 1
  },

  createdat: {
    type: Date,
    "default": Date.now
  },

  updatedat: {
    type: Date,
    "default": Date.now
  }
});

module.exports = mongoose.model('Article', ArticleSchema);
