var db = require('./db.js');

var exports = module.exports = {};

exports.home = () => async (ctx, next) =>
{
    ctx.data.primo = "CIAP";
    ctx.data.secondo = 45
    ctx.data.arr = [4,5,6];
    await next();
}

exports.error = () => async (ctx, next) =>
{
    var a = 100/tre;
    ctx.body = `Hello Koa CIAO middleware: ${ctx.path}`;
    
    await next();
    //throw Error("Unauthorized Test ciaociao");
}


exports.addPerson = () => async (ctx, next) =>
{
    ctx.data = db.addPerson(ctx.request.body);
    await next();
    //throw Error("Unauthorized Test ciaociao");
}