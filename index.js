var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./models');

var Hashids = require('hashids');
var hashids = new Hashids('hedgehogConcept');

app.set('view engine', 'ejs');

// tell server wheres my static file
app.use(express.static('public'));

// configure body-parser
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

// renders homepage
console.log('reading homepage');
app.get('/', function (req, res) {
  res.render('index');
});

app.post('/', function (req, res) {
  // take url from req.body and hash it
  console.log('this is post ' + req.body.url);
  var url = req.body.url;
  var randomNumber = Math.floor(Math.random() * 10000000000000000000);
  // change url to binarynumber
  var hash = hashids.encode(randomNumber);
  console.log('hashed:', hash);

  // create in database
  db.linkTable.findOrCreate({
    where: {
      URL: url
    },
    defaults: {hashIds: hash}
  }).spread(function (data, created) {
    if (created) {
      res.send(data.get().hashIds);
    }else {
      res.send(data.get().hashIds);
    }
  });
});

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
