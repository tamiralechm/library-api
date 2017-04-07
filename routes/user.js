
// Load Module Dependencies
var express = require('express');

var user = require('../controllers/users');
 
// Create a Router
var router = express.Router();

//create a user
router.post('/',users.createusers);

//get a user
router.get('/:_id',users.getuser);

//update a user
router.update('/:_id',user.updateuser);

//get all users
router.get('/',user.getusers);

//delete a user
router.delete('/:_id',user.removeuser);


//export
module.exports=router;