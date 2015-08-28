import express from 'express';
import path from 'path';
// import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import exphbs from 'express-handlebars';
import itemRoutes from './routes/items';
import falcorExpress from 'falcor-express';
import FalcorRoutes from './routes/falcorRoutes';

let app = express();

// view engine setup
let viewDir = path.join(__dirname, 'views');
app.engine('handlebars', exphbs({
    defaultLayout: 'index',
    layoutsDir: viewDir + '/layouts',
    partialsDir: viewDir + '/partials'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));

app.models = {};

app.get('/', (req, res) => {
  console.log();
  res.render('home', {});
});

app.use('/items', itemRoutes(app));

app.use('/model.json', falcorExpress.dataSourceRoute((req, res) => {
  return FalcorRoutes(app);
}));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
      stack: err.stack
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

export default app;
