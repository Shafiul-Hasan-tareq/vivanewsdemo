var mongoose = require('mongoose');
require('../models/user.js');

var JobQueue = mongoose.model("User"),
  ObjectId = mongoose.Types.ObjectId;

var __ = require('lodash');
var UserController = function() {};

UserController.prototype = {

  canUserLogin: function(userName, pass) {

    // TODO : have to get the user pass from the server
    if (userName == "admin" && pass == "admin#viva") {
      return true;
    }
    return false;
  }
};

module.exports = new UserController();
