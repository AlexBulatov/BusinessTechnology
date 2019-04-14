const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const companyRouter = require('./routes/org');
const projectRouter = require('./routes/project');
const chatRouter = require('./routes/chat');

const app = express();

mongoose.connect("mongodb://localhost:27017/businessdb", { useNewUrlParser: true });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/org', companyRouter);
app.use('/project', projectRouter);
app.use('/chat', chatRouter);

module.exports = app;
