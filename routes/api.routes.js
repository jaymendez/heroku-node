var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sms', function(req, res, next) {
  res.send('this is sms');
  // res.render('index', { title: 'Express' });
});

module.exports = router;
