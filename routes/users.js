var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

var plm = require('passport-local-mongoose');

mongoose.connect("mongodb://localhost/twiter_user")
.then(function(){
  console.log("database se conncet ho gayaa hui hui huii...");
})

var userSchema = mongoose.Schema({
  name:String,
  username:String,
  email:String,
  password: String,
 
})
userSchema.plugin(plm)
module.exports= mongoose.model("users",userSchema);

// // const mongoose = require("mongoose");

// // // Replace <username>, <password>, and <database-name> with your MongoDB Atlas credentials
// // const atlasConnectionUri = "mongodb+srv://raiujjwal2003:Ujjwal2003@Rai@cluster.mongodb.net/twitter_users";

// // mongoose.connect(atlasConnectionUri, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// // .then(function(){
// //   console.log("Connected to MongoDB Atlas...");
// // })
// // .catch(function(err) {
// //   console.error("Error connecting to MongoDB Atlas:", err);
// // });

// // var userSchema = mongoose.Schema({
// //   email: String,
// //   password: String,
// // });

// module.exports = mongoose.model("users", userSchema);


// // module.exports = mongoose.model("users", userSchema);



// const mongoose = require("mongoose");

// // Replace <username>, <password>, and <database-name> with your MongoDB Atlas credentials
// const atlasConnectionUri =
//   "mongodb+srv://raiujjwal2003:Ujjwal2003@Rai@cluster.mongodb.net/twitter_users";

// // Connect to MongoDB Atlas
// mongoose.connect(atlasConnectionUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Create a connection reference
// const db = mongoose.connection;

// // Handle connection errors
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// // Notify when the connection is successfully established
// db.once("open", () => {
//   console.log("Connected to MongoDB Atlas");
// });

// // Define your mongoose schema and model here if needed
// const userSchema = mongoose.Schema({
//   email: String,
//   password: String,
// });


