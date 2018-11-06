//LOAD MODULE DEPENDENCIES
var debug=require('debug')('library-api');
var BookDal=require('../dal/book');
/**
 * post book
 */
exports.createBook = function createBook(req, res, next) {
  debug('creating book');
  var body = req.body;
  BookDal.create({
    title: body.name,
    author: body.author,
    publisher:body.publisher,
    price:body.price,
    edition:body.edition,
    category:body.category,
    publication_date:body.publiction_date,

     },
    function cb(err, book) {
      if (err) {
        return next(err);
      };
      res.json(book);
    });
};

/**
 * Get book
 */
exports.getBook = function getBook(req, res, next) {
  debug('getting a book');
  var query = { _id: req.params._Id };
  BookDal.get(query, function cb(err, book) {
    if (err) {
      return next(err);
    }
    // If book found return it
    if (book) {
      res.json(book);
    } else {
      res.status(404);
      res.json({
        error: true,
        message: 'book Not Found!',
        status: 404
      });
    }
  });
};
/**
 * Update book
 */
exports.updateBook = function updateBook(req, res, next) {
  debug('updating book:', req.params._id);
  
  var body = req.body;
  var query = { _id: req.params._id };
  BookDal.update(query, body, function cb(err, book) {
    if (err) {
      return next(err);
    }
    res.json(book);
  });
};
/**
 * Remove book
 */
exports.removeBook = function removeBook(req, res, next) {
  debug('delete book:', req.params._id);

  var query = { _id: req.params._id };
  bookDal.delete(query, function deletecb(err, book) {
    if (err) {
      return next(err);
    }
    res.json(book || {});
  });
};
/**
 * Get COLLECTION OF book
 */
exports.getBooks = function getBooks(req, res, next) {
  debug('get all books');
  bookDal.getCollection({}, function getBooks(err, books) {
    if (err) {
      return next(err);
    }
    res.json(books);
  });
};
//this is trial
