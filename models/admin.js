//load module dependencies
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//define profile schema attribute
var AdminSchema = new Schema({
    profile: { type: Schema.Types.ObjectId, ref: 'profile' },
        },{
    timeStamps:{createdAt:'createda_at',updatedAt:'updated_at'},

});
module.exports=mongoose.model('Admin',AdminSchema);