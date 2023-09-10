var express = require('express');
var router = express.Router();


const userModel= require("./users")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/sign-up', function(req, res, next) {
  res.render('sign_up', { title: 'Express' });
});

router.post('/register_user',function(req, res){
  userModel.create({
    name:req.body.name,
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,


  }).then(function(createduser){
      res.send(createduser);
  }) 
});
module.exports = router;
