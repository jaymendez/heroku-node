var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sms', function(req, res, next) {
  console.log(req.query);
  // if (req.query.inboundSMSMessageList) 
  res.json({"test": "test"});
  // console.log(req);
  // console.log(res);
  // res.render('index', { title: 'Express' });
});

router.post('/sms', function(req, res, next) {
  // res.json({"test": "test"});
  console.log(req.body);
  if (req.body.inboundSMSMessageList) {
    console.log(req.body.inboundSMSMessageList.inboundSMSMessage[0]);
  } 

  // console.log(res);
  // res.render('index', { title: 'Express' });
});



module.exports = router;
