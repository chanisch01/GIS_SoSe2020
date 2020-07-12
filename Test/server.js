"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe11 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe11;
(function (Aufgabe11) {
    let collection;
    let _url = "mongodb+srv://new_user:hallo@chanida.jbyiv.mongodb.net/Aufgabe?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    dataBase();
    function startServer(_port) {
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.listen(port);
    }
    async function dataBase() {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        collection = mongoClient.db("Aufgabe11").collection("Daten");
        if (collection) {
            console.log("Connect to Database!");
        }
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/Absenden")
                collection.insertOne(url.query);
            else if (url.pathname == "/Bekommen") {
                _response.write(JSON.stringify(await collection.find().toArray()));
            }
        }
        _response.end();
    }
})(Aufgabe11 = exports.Aufgabe11 || (exports.Aufgabe11 = {}));
//# sourceMappingURL=server.js.map