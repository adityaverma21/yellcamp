var mongoose =require("mongoose")
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
var commentSchema=mongoose.Schema({
	text:String,
	createdAt:{type:Date,default:Date.now},
	author:{
		id:{
			type:mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
        username:String 
	}
})
module.exports=mongoose.model("Comment",commentSchema)