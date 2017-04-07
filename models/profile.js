//load module dependencies
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//define profile schema attribute
var ProfileSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    first_name: { type: String },
    last_name: { type: String },
    sex: { type: String },

 }, {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    });

//export profile model
module.exports = mongoose.model('Profile', ProfileSchema);