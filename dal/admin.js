//load module dependencies

var admin=require('../models/admin');

var population=[{
  
  path:'user'
}];

// Create admin
exports.create=function create(adminData,cb){

  var adminModel = new Admin(adminData);
  adminModel.save(function saveadmin(err, data) {
    if (err) {
      return cb(err);
    }
    exports.get({ _id: data._id }, function (err, admin) {
      if (err) {
        return cb(err);
      }
      cb(null, admin);
    });
  });
};


//get a admin
exports.get = function get(query, cb) {

   Admin.findOne(query).populate(population).exec(function (err, admin) {
      if (err) {
        return cb(err);
      }
      cb(null, admin || {});
    });
};


// update a admin
 
exports.update = function update(query, updates, cb) {

   Admin.findOneAndUpdate(query, updates).populate(population).exec(function updatecb(err, admin) {
      if (err) {
        return cb(err);
      }
      cb(null, admin || {});
    });
};

// get a collection of admin
  
exports.getCollection = function getCollection(query, cb) {

   Admin.find(query).populate(population).exec(function getadminCollection(err, admins) {
      if (err) {
        return cb(err);
      }
      return cb(null, admins || {});
    });
};

//deleting a admin
exports.delete = function deleteItem(query, cb) {

   Admin.findOne(query).populate(population).exec(function deleteadmin(err, admin) {
      if (err) {
        return cb(err);
      }
      if (!admin) {
        return cb(null, {});
      };
      Admin.remove(function (err) {
        if (err) {
          return cb(err);
        }
        cb(null, admin);
      });
    });
};
