var express = require('express');
var router = express.Router();

module.exports = function(app) {
  app.use('/contact', router);
};

router.get('/', function(req, res, next) {
  res.render('contact/index', {
    nav: 'contact'
  });
});