const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets });
  next();
});

router.get('/stylesheets/style.css', function (req, res) {
  console.log('did it');
})

router.get('/users/:name', function (req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find({ name: name });
  res.render('index', {tweets});

});

module.exports = router;

