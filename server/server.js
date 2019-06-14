//const log = createLog(__filename)
const Koa = require("koa");
const path = require("path");
const parse = require("urlencoded-body-parser");
const config = require("../config");

const dev = process.env.NODE_ENV !=='production';
const nextApp =require("next")({
    dev
});
const nextHandle= nextApp.getRequestHandler();


const api = require("../api");

nextApp.prepare().then(()=>{
    const server = new Koa();
    server.use(async(ctx,next)=>{
        console.log("ctx.path ======",ctx.path,ctx.req.method);
        if(ctx.req.method === "POST"){
            //const buf = await getRawBody
            console.log("ctx.path.slice(5,100)",ctx.path.slice(5,100))
            return (ctx.body = await api(ctx.path.slice(5,100),JSON.parse(ctx.rawBody)))
        }
        
        await next();
    })
    server.use(async(ctx,next)=>{
        console.log("ctx.req",ctx.respond)
        await nextHandle(ctx.req,ctx.res)
        ctx.respond = false
    });
    server.listen(config.port,()=>{
        console.log(`>Ready on http://localhost:${config.port}`);
    })
});


