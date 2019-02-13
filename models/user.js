let mongoose=require('mongoose');

let userSchema=mongoose.Schema({
  username:{
    type:String,
    required: true
  },
  name:{
    type:String,
    required: true
  },
  address:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
});

let User = module.exports = mongoose.model('user', userSchema);
