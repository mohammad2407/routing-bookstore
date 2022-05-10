const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json'); // <== Will be created later
const middlewares = jsonServer.defaults({
    static:"./build"
});
const port = process.env.PORT || 3002; // <== You can change the port

server.use(middlewares);
server.use(
    jsonServer.rewriter({
        "/http://localhost:3002/Data/*" : "/$1"
    })
);
server.use(router)
server.listen(port);