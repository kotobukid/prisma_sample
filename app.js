import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import fs from 'fs';
// import indexRouter from './routes/index.js';
import usersRouter from './routes/user.js';
const app = express();
// view engine setup
app.set('views', './views');
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.static('./dist'));
app.use('/api/user', usersRouter);
app.use('/', (req, res) => {
    fs.readFile(new URL('./dist/index.html', import.meta.url), (err, data) => {
        res.end(data);
    });
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
// @ts-ignore
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
export default app;
