const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');
//const path = require('path');

app.use(express.static('public'));

app.use(function (req, res, next) {
  console.log(req.method);
  next();
})
// app.get('/stylesheets/style.css', function(req, res){
//   res.sendFile(path.join(__dirname, '/public/stylesheets/style.css'));
// })
app.use('/', routes);


// app.get('/', function (req, res) {
//   //res.send('Hello there');
//   res.render('index', { title: 'Hall of Fame', people: people });
// })

app.set('view engine', 'html');
app.engine('html', nunjucks.render);


nunjucks.configure('views', { noCache: true });
// nunjucks.render('index.html', locals, function (err, output) {
//   if (err) { throw err }
//   //console.log(output);
// });

app.listen(3000, function () {
  console.log('server listening');
})
