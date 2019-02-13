let mongoose=require('mongoose');
let user1Schema=mongoose.Schema({
	username:{
		type:String;
		required:true;
	}
	password:{
		type:String;
		required:true;
	}
	let User1=module.exports=mongoose.model('user1',user1Schema);

});