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
  console.log(req.body);
  if (req.body.inboundSMSMessageList) {
    // console.log(req.body.inboundSMSMessageList.inboundSMSMessage[0]);
    let data = req.body.inboundSMSMessageList.inboundSMSMessage[0];
    console.log(data);
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
    })
    receivedSmsTest.save().then(sms => res.json(sms)).catch(err => {throw err});
  }

  // console.log(res);
  // res.render('index', { title: 'Express' });
});



module.exports = router;
