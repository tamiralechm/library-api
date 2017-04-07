//load module dependencies
var debug=require('debug')('library-api');
var profileDal=require('../dal/Profile');
 

/**
 * Get Profile
 */
exports.getProfile = function getProfile(req, res, next) {
  debug('getting a Profile');

  var query = { _id: req.params._Id };
  ProfileDal.get(query, function cb(err, profile) {
    if (err) {
      return next(err);
    }
    // If Profile found return it
    if (profile) {
      res.json(profile);
    } else {
      res.status(404);
      res.json({
        error: true,
        message: 'Profile Not Found!',
        status: 404
      });
    }
  });
};
/**
 * Update Profile
 */
exports.updateProfile = function updateProfile(req, res, next) {
  debug('updating Profile:', req.params._id);
  
  var body = req.body;
  var query = { _id: req.params._id };
  ProfileDal.update(query, body, function cb(err, profile) {
    if (err) {
      return next(err);
    }
    res.json(profile);
  });
};
/**
 * Remove Profile
 */
exports.removeProfile = function removeProfile(req, res, next) {
  debug('delete Profile:', req.params._id);

  var query = { _id: req.params._id };
  ProfileDal.delete(query, function deletecb(err, profile) {
    if (err) {
      return next(err);
    }
    res.json(profile || {});
  });
};
/**
 * Get COLLECTION OF Profile
 */
exports.getProfiles = function getProfiles(req, res, next) {
  debug('get all Profiles');

  ProfileDal.getCollection({}, function getProfiles(err, profiles) {
    if (err) {
      return next(err);
    }
    res.json(profiles);
  });
};