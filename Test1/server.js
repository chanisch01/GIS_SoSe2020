"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test1 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Test1;
(function (Test1) {
    let collection;
    let databaseUrl = "mongodb+srv://new_user:hallo@chanida.jbyiv.mongodb.net/Aufgabe?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    console.log("Starting server");
    connectToDatabase(databaseUrl);
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        collection = mongoClient.db("Aufgabe").collection("Daten");
        console.log("Database connection ", collection != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/absenden")
                collection.insertOne(url.query);
            else if (url.pathname == "/bekommen") {
                _response.write(JSON.stringify(await collection.find().toArray()));
            }
        }
        _response.end();
    }
})(Test1 = exports.Test1 || (exports.Test1 = {}));
//# sourceMappingURL=server.js.map