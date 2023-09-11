var express = require('express');
var router = express.Router();
const passport = require('passport');


const userModel= require("./users")

// This two line of code adding for passport js 
const localStrategy = require('passport-local');
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/sign-up', function(req, res, next) {
  res.render('sign_up', { title: 'Express' });
});

router.post('/register_user_demo',function(req, res){
  userModel.create({
    name:req.body.name,
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,


  }).then(function(createduser){
      res.send(createduser);
  }) 
});



router.post('/register_user', function (req, res) {
  var newUser = new userModel({
    name: req.body.name,
    username: req.body.username,
    email : req.body.email
  })
  userModel.register(newUser, req.body.password).then(function () {
    passport.authenticate('local')(req, res, function () {
      res.redirect('/')
    })
  })
  .catch(function(err){
      res.send(err);
  })
});

// router.get('/home',isLoggedIn, function(req, res, next) {
//   res.render('home', { title: 'home' });
// });

router.get('/home', isLoggedIn, function(req, res, next) {
  // Check if the user is logged in and the user object exists
  if (req.isAuthenticated() && req.user) {
    const user = req.user; // Assuming your user details are stored in req.user
    res.render('home', { title: 'Home', user: user });
  }
  //  else {
  //   // Handle the case where the user is not logged in or the user object is undefined
  //   res.redirect('/'); // Redirect to the login page or an appropriate page
  // }
});


router.post('/login', passport.authenticate('local',{
  successRedirect:'/home',
  failureRedirect:'/'
}),function(req, res, next) {  });



function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  else{
    res.redirect('/');
  }
}
module.exports = router;
