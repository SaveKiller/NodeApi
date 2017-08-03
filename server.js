'use strict';

var koa = new (require('koa'))();
//var serve = require('koa-static-2');
koa.use(require('koa-bodyparser')());


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
router.post('/all',approutes.allPersons());
router.get('/all',approutes.allPersons());
// ==========================================================


// start server
var port = 1337;
console.log(`Listening on port ${port}.`);
koa.listen(port);