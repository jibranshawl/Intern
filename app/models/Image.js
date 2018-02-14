// defining a mongoose schema 
// including the module
var mongoose = require('mongoose');
var uuid = require('node-uuid');
// declare schema object.
var Schema = mongoose.Schema;

var userSchema = new Schema({

		 
		 _id				: { type: String, default: uuid.v4 },
   		 tags				: [], 
		 sourceLink			: {type:String,default:''},
	     shared				: {type:Number},
		 size               : {type:String,default:''},
	     creationDate		: {type:Date,default: Date.now},
		 basePrice	        : {type:Number},
		 logoColor			: [],
		 shadowColor		: [],
		 fontSize 			: {type:String,default:''},
		 imageResolution	: [], 
		 yValue				: {type:Number},
		 mainText		    : {type:String,default:''},
		 supportText		: {type:String,default:''},
		 mainPic			: {type:String,default:''},
		 supportPic			: {type:String,default:''},
		 icons				: [],
		 background			: {type:String,default:''}
		});

mongoose.model('Image',userSchema);