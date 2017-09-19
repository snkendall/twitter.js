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
  var list = tweetBank.find({ name: name });
  // var li = tweetBank.find({ content: content });
  res.render('index', list);

});

module.exports = router;

