//load module dependencies

var mongoose=require('mongoose');

var Schema=mongoose.Schema;

//define librariya attribute
var UserSchema=new Schema({
    password:{ttype:String},
    phone_number:{type:String},
    realm: { type: String, default: 'user' },
    role: { type: String, default: 'librariyan' },
    profile: { type: Schema.Types.ObjectId, ref: 'Profile' },

    },{
    timeStamps:{createdAt:'createda_at',updatedAt:'updated_at'},

});
module.exports=mongoose.model('User',UserSchema);