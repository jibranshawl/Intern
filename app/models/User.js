
// defining a mongoose schema 
// including the module
var mongoose = require('mongoose');
var uuid = require('node-uuid');
// declare schema object.
var Schema = mongoose.Schema;
//require('mongoose-uuid2')(mongoose);
//var UUID = mongoose.Types.UUID;

var userSchema = new Schema({

	 _id				:  { type: String, default: uuid.v4 },
 	firstName			:  {type:String,default:''},
	lastName			:  {type:String,default:''},
	CompanyName		    :  {type:String,default:''},
	DisplayName		    :  {type:String,default:''},
	BusinessCategory	:  {type:String,default:''},
	city				:  {type:String,default:''},
	state               :  {type:String,default:''},
	country             :  {type:String,default:''},
	ProfileCreationdate :  {type:Date,default: Date.now},
	EmailId             :  {type:String,default:''},
	PhoneNumber         :  { type: Number, min: 10, max: 10 }

});


mongoose.model('User',userSchema);

