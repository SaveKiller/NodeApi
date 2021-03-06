var exports = module.exports = {};

// logger
exports.logger = () => async (ctx, next) =>
{
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    
    var status = ctx.response.status;
    var method = ctx.method;
    var url = ctx.originalUrl;
    var mess = ctx.response.message;
    var path = ctx.path;
    var len = ctx.body ? ctx.body.length : 0;

    console.log(`>> ${method} ${url} ${ms}ms ${len}b => ${status} ${mess}`);
    if (ctx.err) console.log(`ERROR >> ${ctx.err.stack}`);
};



// global error catcher / data object
exports.datacatcher = () => async (ctx, next) =>
{
    try  { ctx.data = {}; await next(); }
    catch (err) 
    { 
        ctx.status = 500; 
        ctx.err = err; 
        ctx.data = { Error : err.message }; 
    }

    ctx.set('Content-Type', 'application/json');
    ctx.body = JSON.stringify(ctx.data);       
};