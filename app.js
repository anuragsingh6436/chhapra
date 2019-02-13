 const express = require('express');
const path = require('path');
const mongoose =require('mongoose');
const bodyParser=require('body-parser');
//mongoose.connect('mongodb://localhost/nodekb');
mongoose.connect('mongodb+srv://asr_123:anurag@123@cluster0-nyfnu.mongodb.net/test1?retryWrites=true',{ useNewUrlParser: true });
let db =mongoose.connection;

db.once('open',function(){
  console.log('connected to mongodb');
});

db.on('error',function(err){
  console.log(err);
});

const app =express();
app.use(express.static(__dirname));
let User= require('./models/user');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended :false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
  res.sendFile('asr1.html', {root: __dirname })
});




 app.post('/signup',function(req,res){
   let user = new User();
   user.username= req.body.username;
   user.name= req.body.name;
   user.address= req.body.address;
   user.password= req.body.password;
   User.find({username:req.body.username},(err,userfound)=>{
      if(userfound){
        console.log(userfound);
        console.log("Username exists");
        res.render('sign',{error:"Username Exists"});
        return;
      }else{
           user.save(function(err){
     if(err){
       console.log(err);
       return ;
     }
     else {
       {
         res.redirect('/');
       }
     }
   });
      }
   });

 });

app.listen(3000,function(){
  console.log('server started at port 3000');
});
