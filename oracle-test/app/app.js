var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var oracledb = require('oracledb');

// oracle.getConnection({
//   user:"",
//   password: "",
//   connectString : ""},
//   function(err, connection){
//     if(err) { console.error(err.message); return;}
//     connection.execute(
//       "'", [], function(err, result){
//         if(err) {console.error(err.message); return;}
//         console.log("result", result);
//       }
//     );
//   }
//   );

// oracledb.getConnection(
//   {
//     user          : "",
//     password      : "",
//     connectString : ""
//   },
//   connExecute
// );

// function connExecute(err, connection)
// {
//     if (err) {
//         console.error(err.message);
//         return;
//     }

//     sql = "select * from ;
//     connection.execute(sql, {}, { outFormat: oracledb.OBJECT }, // or oracledb.ARRAY
//         function(err, result)
//         {
//             if (err) {
//                 console.error(err.message);
//                 connRelease(connection);
//                 return;
//             }
//             console.log(result.metaData);
//             console.log(result.rows);
//             connRelease(connection);
//         });
// }

// function connRelease(connection)
// {
//   connection.close(
//     function(err) {
//       if (err) {
//         console.error(err.message);
//       }
//     });
// }

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
