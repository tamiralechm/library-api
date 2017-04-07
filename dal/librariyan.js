//load module dependencies
var Librariyan=require('../dal/librariyan');

var population=[{
    path:'user'
}]
exports.create=function create(librariyanData,cb){

  var librariyanModel = new Librariyan(librariyanData);
  librariyanModel.save(function savelibrariyan(err, data) {
    if (err) {
      return cb(err);
    }
    exports.get({ _id: data._id }, function (err, librariyan) {
      if (err) {
        return cb(err);
      }
      cb(null, librariyan);
    });
  });
};


//get a librariyan
exports.get = function get(query, cb) {

   Librariyan.findOne(query).populate(population).exec(function (err, librariyan) {
      if (err) {
        return cb(err);
      }
      cb(null, librariyan || {});
    });
};


// update a librariyan
 
exports.update = function update(query, updates, cb) {

   Librariyan.findOneAndUpdate(query, updates).populate(population).exec(function updatecb(err, librariyan) {
      if (err) {
        return cb(err);
      }
      cb(null, librariyan || {});
    });
};

// get a collection of librariyan
  
exports.getCollection = function getCollection(query, cb) {

   Librariyan.find(query).populate(population).exec(function getLibrariyanCollection(err, librariyans) {
      if (err) {
        return cb(err);
      }
      return cb(null, librariyans || {});
    });
};

//deleting a librariyan
exports.delete = function deleteItem(query, cb) {

   Librariyan.findOne(query).populate(population).exec(function deletelibrariyan(err, librariyan) {
      if (err) {
        return cb(err);
      }
      if (!librariyan) {
        return cb(null, {});
      };
      Librariyan.remove(function (err) {
        if (err) {
          return cb(err);
        }
        cb(null, librariyan);
      });
    });
};
