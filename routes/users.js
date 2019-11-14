var express = require('express');
var router = express.Router();

let messages = [];

/* GET users listing. */
router.get('/:userId', function(req, res, next) {

  let meh = parseInt(req.params.userId);

  res.send({
    success: true,
    message: "Request made successfully",
    error: null,
    userId: meh
  });
});

router.post('/message',(req,res,next)=> {
  messages.push({
    message: req.body.message,
    sender: req.body.sender
  });

  res.send({
    success: true,
    message: "Request made successfully",
    error: null,
    messages: messages
  })
})

module.exports = router;
