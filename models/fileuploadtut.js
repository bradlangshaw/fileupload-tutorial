// This is where your will store the file name that will be create in the database.
// It will allow you to access the file or image later.
// mongoose
let mongoose = require('mongoose');

// json definition ( data types, properties, etc)
let uploadtutSchema = new mongoose.Schema({
 /** This can be anything **/ 
 fileName:{
    type: String,
  }

});

//make the model public
module.exports = mongoose.model('fileuploadtut', uploadtutSchema);
