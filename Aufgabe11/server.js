"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe11 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe11;
(function (Aufgabe11) {
    let databaseUrl = "mongodb+srv://new_user:hallo@chanida.jbyiv.mongodb.net/Aufgabe11?retryWrites=true&w=majority";
    let daten;
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        daten = mongoClient.db("Aufgabe11").collection("Daten");
        if (daten != undefined) {
            console.log("Connection to Database");
        }
    }
    connectToDatabase(databaseUrl);
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        console.log("jsonString");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/Anlegen") {
                daten.insertOne(url.query);
            }
            if (url.pathname == "/Ausgeben") {
                _response.write(JSON.stringify(await (daten.find().toArray())));
            }
        }
        _response.end();
    }
})(Aufgabe11 = exports.Aufgabe11 || (exports.Aufgabe11 = {}));
//# sourceMappingURL=server.js.map