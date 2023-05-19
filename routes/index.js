var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fins Dev Skills' });
});

// const { index } = require('../controllers/index');

module.exports = router;
