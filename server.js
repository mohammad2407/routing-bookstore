const jsonSever = require("json-server")
const server = jsonSever.create()
const router = jsonSever.router("./db.json");
const middlewares = jsonSever.defaults({
    static: "./build"
})
const port = process.env.PORT || 3002;
server.use(middlewares);
server.use(jsonSever.rewriter({
    "/http://localhost:3002/Data/*":"$1",
})
)

server.use(router);
server.listen(port, () => console.log(`server is running on ${port}`))