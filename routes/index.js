var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Sms = require('../models/Sms');

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
  if (req.body.inboundSMSMessageList) {
    // console.log(req.body.inboundSMSMessageList.inboundSMSMessage[0]);
    let data = req.body.inboundSMSMessageList.inboundSMSMessage[0];
    const receivedSms = new Sms({
      date_received: data.dateTime,
      destinationAddress: data.destinationAddress,
      messageId: data.messageId,
      message: data.message,
      resourceURL: data.resourceURL,
      senderAddress: data.senderAddress 
    });
    receivedSms.save().then(sms => res.json(sms)).catch(err => {throw err});
  } else {
    data = req.body;
    const receivedSmsTest = new Sms({
      date_received: data.dateTime,
      destinationAddress: data.destinationAddress,
      messageId: data.messageId,
      message: data.message,
      resourceURL: data.resourceURL,
      senderAddress: data.senderAddress 
    });
    receivedSmsTest.save().then(sms => res.json(sms)).catch(err => {throw err});
  }
  
  res.render('index', { title: 'Express' });

});

router.get('/receiver', function(req, res, next) {
  // console.log('asd')
  let receivedSms = Sms.find().sort({date_received: -1}).limit(10);
  let result = [];
  receivedSms.then(x => {
    x.forEach((data) => {
      let returnData = {};
      returnData.message = data.message;
      returnData.date_received = data.date_received;
      returnData.senderAddress = data.senderAddress;
      result.push(returnData);
    })
    receivedSms.then(sms => res.json(result));
  })
  
})


module.exports = router;
