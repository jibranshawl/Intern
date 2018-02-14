var mongoose = require('mongoose');
var express = require('express');

// express router // used to define routes 
var userRouter  = express.Router();
var userModel = mongoose.model('User')
var responseGenerator = require('./../../libs/responseGenerator');



module.exports.controllerFunction = function(app) {

         
// start route to GET all users
userRouter.get('/user',function(req, res) {

  userModel.find(function(err,result){
    if(err){
      res.send(err)
    }
    else{
      res.send(result)
    }


  });// end user model find 
  
});

// end route to GET all users

// route to get a particular user
userRouter.get('/user/:_id',function(req, res) {

  userModel.findOne({'_id':req.params._id},function(err,result){
    if(err){
      console.log("some error");
      res.send(err);
    }
    else{
      //console.log(result);
      res.send(result)
    }


  });// end user model find 
  
});


  
  
    userRouter.post('/create',function(req,res){

        if(req.body.firstName!=undefined && req.body.lastName!=undefined && req.body.EmailId!=undefined){

            var newUser = new userModel({
              	      
                firstName             :  req.body.firstName,
                lastName              :  req.body.lastName,
                CompanyName           :  req.body.CompanyName,  
                DisplayName           :  req.body.DisplayName,
                BusinessCategory      :  req.body.BusinessCategory,
                city                  :  req.body.city,
                state                 :  req.body.state,
                country               :  req.body.country,
                EmailId               :  req.body.EmailId,
                PhoneNumber           :  req.body.PhoneNumber               
                
            });// end new user 

             
            newUser.save(function(err){
                if(err){

                    var myResponse = responseGenerator.generate(true,"some error"+err,500,null);
                   res.send(myResponse);
                   
                }
                else{

                   var myResponse = responseGenerator.generate(false,"successfully signup user",200,newUser);
                   res.send(myResponse);
                   req.session.user = newUser;
                                      
                }

            });//end new user save


        }
        else{

            var myResponse = {
                error: true,
                message: "Some body parameter is missing",
                status: 403,
                data: null
            };

            res.send(myResponse);

             
        }
        

    });//end get all users


// start route to edit a user using _id 

userRouter.put('/user/:_id/edit',function(req, res) {

  var update = req.body;

  userModel.findOneAndUpdate({'_id':req.params.id},update,function(err,result){

    if(err){
      console.log("some error");
      res.send(err)
    }
    else{
      res.send(result)
    }


  });// end user model find 
  
});
// end route to edit a user using _id


// start the route to delete a user 
userRouter.post('/user/:_id/delete',function(req, res) {

  userModel.remove({'_id':req.params.id},function(err,result){

    if(err){
      console.log("some error");
      res.send(err)
    }
    else{
      res.send(result)
    }


  });// end user model find 
  
});

// end delete 


   
   

    // this should be the last line
    // now making it global to app using a middleware
    // think of this as naming your api 
    app.use('/users', userRouter);



 
} //end contoller code
