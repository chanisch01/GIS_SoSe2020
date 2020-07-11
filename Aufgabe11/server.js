"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe11 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe11;
(function (Aufgabe11) {
    console.log("Starting server");
    let formData;
    let mongoUrl = "mongodb+srv://new_user:hallo@chanida.jbyiv.mongodb.net/Test?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    function startServer() {
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }
    startServer();
    connectToDatabase(mongoUrl);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        formData = mongoClient.db("test").collection("students");
        console.log("Connection to Database", formData != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        console.log("Hallo");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/datenbank") {
                formData.insertOne(url.query);
            }
            if (url.pathname == "/pull") {
                _response.write(JSON.stringify(await (formData.find().toArray())));
            }
        }
        _response.end();
    }
})(Aufgabe11 = exports.Aufgabe11 || (exports.Aufgabe11 = {}));
//# sourceMappingURL=server.js.map