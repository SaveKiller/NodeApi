'use strict';

var koa = new (require('koa'))();
//var serve = require('koa-static-2');
var bodyParser = require('koa-bodyparser');
koa.use(bodyParser());


// utilities: logger, data, error catcher
var utils = require('./utils.js');
koa.use(utils.logger());
koa.use(utils.datacatcher());


// routing
var router = new (require('koa-router'))();
koa.use(router.routes());
var approutes = require('./routes.js');


// routes
// ==========================================================
router.get('/', approutes.home());
router.get('/error', approutes.error());
router.post('/add',approutes.addPerson());
// ==========================================================


// start server
var port = 1337;
console.log(`Listening on port ${port}.`);
koa.listen(port);