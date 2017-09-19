const express = require('express');
const app = express();

const nunjucks = require('nunjucks');

app.use(function (req, res, next) {
  console.log(req.methodd);
  next();
})
app.use('/special', function (req, res, next) {
  console.log('You are special');
})

app.get('/', function (req, res) {
  //res.send('Hello there');
  res.render('index', { title: 'Hall of Fame', people: people });
})

var locals = {
  title: 'An Example',
  people: [
    { name: 'Gandalf' },
    { name: 'Frodo' },
    { name: 'Hermione' }
  ]
};

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

nunjucks.configure('views', { noCache: true });
nunjucks.render('index.html', locals, function (err, output) {
  if (err) { throw err }
  console.log(output);
});

const people = [{ name: 'Full' }, { name: 'Stacker' }, { name: 'Son' }];

app.listen(3000, function () {
  console.log('server listening');
})
