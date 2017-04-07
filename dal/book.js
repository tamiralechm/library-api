//load module dependencies

var Book=require('../models/book');

// var population=[{
  
//   path:'book'
// }];

// Create book
exports.create=function create(bookData,cb){

  var bookModel = new Book(bookData);
  bookModel.save(function savebook(err, data) {
    if (err) {
      return cb(err);
    }
    exports.get({ _id: data._id }, function (err, book) {
      if (err) {
        return cb(err);
      }
      cb(null, book);
    });
  });
};


//get a book
exports.get = function get(query, cb) {

   Book.findOne(query).populate(population).exec(function (err, book) {
      if (err) {
        return cb(err);
      }
      cb(null, book || {});
    });
};


// update a book
 
exports.update = function update(query, updates, cb) {

   Book.findOneAndUpdate(query, updates).populate(population).exec(function updatecb(err, book) {
      if (err) {
        return cb(err);
      }
      cb(null, book || {});
    });
};

// get a collection of book
  
exports.getCollection = function getCollection(query, cb) {

   Book.find(query).populate(population).exec(function getbookCollection(err, books) {
      if (err) {
        return cb(err);
      }
      return cb(null, books || {});
    });
};

//deleting a book
exports.delete = function deleteItem(query, cb) {

   Book.findOne(query).populate(population).exec(function deletebook(err, book) {
      if (err) {
        return cb(err);
      }
      if (!book) {
        return cb(null, {});
      };
      Book.remove(function (err) {
        if (err) {
          return cb(err);
        }
        cb(null, book);
      });
    });
};
