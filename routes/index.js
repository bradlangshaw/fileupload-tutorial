var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: 'public/uploads/' })
//STEP 8: vv ----- *IMPORTANT*---- vv
// add a variable called 'multer', have it require 'multer'.
// add a variable called 'upload',
// have it equal "multer({ dest: 'public/uploads/' });"


//STEP 9:
// add a variable that is the same as the database model that will be created in later steps
// This tutorial will use:
//var fileuploadtut = require('../models/fileuploadtut');
var fileuploadtut = require('../models/fileuploadtut'); 

//STEP 10:
// add this "router.post('/', upload.single('fileupload'), function(req, res, next) {"
      /* NOTE: The id and name from our form input is 'fileupload' */ 

//STEP 11: 
// add your database connection file from a previous application         **Look for tutorials online for MongoDB and mongoose**
//      OR       
// Create a new mongodb database connection and connect it in the directory: "../config/globals.js"
//      THEN
// Create your model file or use our demo file. There are a few comments in there too.

// router.post('/', upload.single('fileupload'), function(req, res, next) {
// //STEP 12:
// // use the model from Step 11 to add the file name to the db
// //    fileuploadtut.create({
// //         fileName: req.file.filename,
// //     },function(err) {
// //         if (err) {
// //             console.log(err);
// //             res.render('error');
// //             return;
// //         }

// //         res.redirect('/');
// //     });

// });

router.get('/', function(req, res, next) {
//STEP 14:
// // use the model from Step 11 aand query the database to desplay your image on the page
  res.render('index', {
      title: 'File Upload Tutorial'}); // <--- delete this
    // fileuploadtut.find(function(err, queryResults){
    //     if (err){
    //         console.log(err);
    //         res.end(err);
    //         return;
    //     }
    //     else{
    //         console.log(queryResults);
    //         res.render('index', {
    //             fileuploadtut: queryResults
    //         });
            
    //     }
    // });
});
 
 // STEP 15:
//  Go to STEP 16 in "views/index.ejs"

module.exports = router;
