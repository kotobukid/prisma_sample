import {NextFunction, Response} from "express";
import createError from 'http-errors';
import express from 'express'
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import SwaggerUiDist from 'swagger-ui-dist';

import swaggerRouter from './routes/swagger.js'
import indexRouter from './routes/index.js';
import usersRouter from './routes/user.js';

const pathToSwaggerUi = SwaggerUiDist.absolutePath();

const app: express.Express = express();

// view engine setup
app.set('views', './views');
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/', indexRouter);
app.use('/swagger', express.static(pathToSwaggerUi));
app.use(express.static('./public'));
app.use(express.static('./dist'));

app.use('/api/user', usersRouter);
app.use('/sw', swaggerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next: NextFunction) {
    next(createError(404));
});

// error handler
// @ts-ignore
app.use(function (err: any, req: Request | any, res: Response, next: NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

export default app