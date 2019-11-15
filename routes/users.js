var express = require('express');
var router = express.Router();

let messages = [];//global array

/**
 * simple route to get the userId the user sent in
 *  the url
 * Full URL: http://localhost:3000/users/:userId 
 * Example: http://localhost:3000/users/100
 */
router.get('/:userId', function(req, res, next) {

  // The userId that is sent in the URL is parsed to an int and stored in the meh variable
  //the userId is parsed because my default it is a string
  let meh = parseInt(req.params.userId);//if userId is set to 100 you should get back 100 in your response

  res.send({
    success: true,
    message: "Request made successfully",
    error: null,
    userId: meh
  });
});

/**
 * Send messages that will be stored
 * in an array and returned to the sender
 * including all the past messages
 * Full URL: http://localhost:3000/users/message
 */
router.post('/message',(req,res,next)=> {
  //stores incoming message in array
  //.push() is an array function that is used to put something into an array
  messages.push({
    message: req.body.message,//you can access the message you sent from req.body.message
    sender: req.body.sender//the sender name you set will be in req.body.sender
  });

  //res.send is used to send back a response to the person making the request
  res.send({
    success: true,
    message: "Request made successfully",
    error: null,
    messages: messages
  })
})

module.exports = router;
