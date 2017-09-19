const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets, showForm: true });
  next();
});

router.get('/stylesheets/style.css', function (req, res) {
  console.log('did it');
})

router.get('/users/:name', function (req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find({ name: name });
  res.render('index', {tweets, showForm: true, value: name});
});

router.get('/tweets/:id', function (req, res) {
  var id = req.params.id;
  var tweets = tweetBank.find({ id: id });
  console.log(tweets);
  res.render('index', {tweets});
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;

