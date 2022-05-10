import { create, router as _router, defaults, rewriter } from 'json-server';
const server = create();
const router = _router('./db.json'); // <== Will be created later
const middlewares = defaults({
    static:"./build"
});
const port = process.env.PORT || 3002; // <== You can change the port

server.use(middlewares);
server.use(
    rewriter({
        "/http://localhost:3002/Data/*" : "/$1"
    })
);
server.use(router)
server.listen(port);