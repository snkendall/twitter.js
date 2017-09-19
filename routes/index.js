const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
  next();
});

router.get('/stylesheets/style.css', function(req, res){
  console.log('did it');
})


module.exports = router;