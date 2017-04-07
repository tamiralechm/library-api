// Load Module Dependencies
var express = require('express');
var book = require('../controllers/book');
 
// Create a Router
var router = express.Router();

//create a book
router.post('/',book.createBook);

//get a book
router.get('/:_id',book.getBook);

//update a book
router.update('/:_id',book.updateBook);

//get all book
router.get('/',book.getBooks);

//delete a book
router.delete('/:_id',book.removeBook);


//export
module.exports=router;