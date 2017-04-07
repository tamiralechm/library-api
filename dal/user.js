 // Load Module Dependencies.
 
var debug = require('debug')('library-api');
var moment = require('moment');
var User = require('../models/user');
var Profile=require('../models/profile');

var population=[{
  path: 'profile'
 }];

//create user
exports.create = function create(userData, cb) {

   //Verify if the user exists
  var query = { phone_number:userData.phone_number };
  User.findOne(query, function userExists(err, existingUser){
    if(err){ return cb(err);}
    if(existingUser){
    return cb(new Error('User already exists'));
  }
  });
  
  // Create user
  var userModel = new User(userData);
  userModel.save(function saveUser(err, data) {
    if (err) {
      return cb(err);
    }
    exports.get({ _id: data._id }, function (err, user) {
      if (err) {
        return cb(err);
      }
      cb(null, user);
    });
  });
};


//get a user
exports.get = function get(query, cb) {
   User .findOne(query).populate(population).exec(function (err, user) {
      if (err) {
        return cb(err);
      }
      cb(null, user || {});
    });
};


// update a user
 
exports.update = function update(query, updates, cb) {
  
   User.findOneAndUpdate(query, updates).populate(population).exec(function updatecb(err, user) {
      if (err) {
        return cb(err);
      }
      cb(null, user || {});
    });
};

// get a collection of users
  
exports.getCollection = function getCollection(query, cb) {

   User.find(query).populate(population).exec(function getUsersCollection(err, users) {
      if (err) {
        return cb(err);
      }
      return cb(null, users || {});
    });
};

//deleting a user
exports.delete = function deleteItem(query, cb) {

   User.findOne(query).populate(population).exec(function deleteUser(err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, {});
      };
      User.remove(function (err) {
        if (err) {
          return cb(err);
        }
        cb(null, user);
      });
    });
};
