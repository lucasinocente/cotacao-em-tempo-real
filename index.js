var express = require('express');
var app = express();

// Set the port for use of the app
app.set('port', (process.env.PORT || 5000));

// Use /public for public files
app.use(express.static(__dirname + '/public'));

// redirect CSS bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); 

// redirect Angular scripts
app.use('/js', express.static(__dirname + '/node_modules/angular')); 

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


