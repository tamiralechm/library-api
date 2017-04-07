//load module dependencies

var mongoose=require('mongoose');

var Schema=mongoose.Schema;

//define books schema attributes
var BookSchema=ne Schema({
    title:{type:String},
    author:{type:String},
    publisher:{type:String},
    price:{type:String},
    edition:{type:String},
    category:{type:String},
    publication_date:{type:Date},
},{
    timeStamps:{createdAt:'createda_at',updatedAt:'updated_at'},
});

//export book module
module.exports=mongoose.model('Book',BookSchema);