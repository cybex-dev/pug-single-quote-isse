var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const object = {
    message: "This doesn't work"
  }
  res.render('index', { title: 'Express', object });
});

module.exports = router;
