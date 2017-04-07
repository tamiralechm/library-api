//load module dependencies

var express=require('express');
var bookRouter=require('../controllers/books');
var userRouter=require('../controllers/librariyan');
var profileRouter=require('../controllers/category');

module.exports = function initRouter(app) {

//books endpoint
app.use('/books',booksRouter);

//category endpoint
app.use('/users',userRouter);

//librariyan endpoint
app.use('/profiles',profileRouter);

};