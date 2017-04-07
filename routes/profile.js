
// Load Module Dependencies
var express = require('express');

var profile = require('../controllers/profiles');
 
// Create a Router
var router = express.Router();

//create a profile
router.post('/',profiles.createprofiles);

//get a profile
router.get('/:_id',profiles.getprofile);

//update a profile
router.update('/:_id',profile.updateprofile);

//get all profiles
router.get('/',profile.getprofiles);

//delete a profile
router.delete('/:_id',profile.removeProfile);


//export
module.exports=router;