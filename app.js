//estas variables se vana a usar a lo largo del proyecto 
// express,path, favicon, logger, cookieParser, bodyParser
// para ello con anterioridad, hemos importado los modulos de npm

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


//estos dos son los errutadores, aqui , los estamos importando. Tenemos el de index y el de users

var routes = require('./routes/index');

//La gestion de usuarios se va a realizar de otra manera,v2
//tambien borramos el fichero user.js de la carpeta routes, este fuchero, se habia generado automaticamente por expres generator
//var users = require('./routes/users');
var partials = require('express-partials'); 
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(partials());

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// aqui, instalamos los enrrutadores en el middleware app, con use, y les pasamos de parametro las rutas de index y users
app.use('/', routes);

//la gestion de usuarios la vamos a realizar de otra manera, v2
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace


if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
   }

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});




/////////////////////////

//var fs = require('fs');

//app.createServer(function(req, res) {
  // This opens up the writeable stream to `output`
 // fs.createWriteStream('./output');

  // This pipes the POST data to the file
  //pipe(fs.createWriteStream);

//var fs = require('fs');
//fs.writeFile('./file2.txt', process.stdout)

//var fs = require('fs');
//var transaccion = fs.createWriteStream(__dirname + '/node.transaccion.log', { flags: 'a' })
//var error = fs.createWriteStream(__dirname + '/node.error.log', { flags: 'a' });

// redirect stdout / stderr
//process.stdout.pipe();
//process.stderr.pipe(error);

////////////////////////////


//var http = require('http')
//  , fs = require('fs')
//  ;
 
//var server = http.createServer(function (req, res) {

//return fs.createWriteStream(__dirname + '/data.txt', app(),{flags:'a'});
 
//});

/////////////////////////7


module.exports = app;
