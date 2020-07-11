import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe11 {

  let databaseUrl: string = "mongodb+srv://new_user:hallo@chanida.jbyiv.mongodb.net/Aufgabe11?retryWrites=true&w=majority";
  let daten: Mongo.Collection;

  async function connectToDatabase(_url: string): Promise<void> {

    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    daten = mongoClient.db("Aufgabe11").collection("Daten");
    if (daten != undefined) {
      console.log("Connection to Database");
    }
  }

  connectToDatabase(databaseUrl);

  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);
  

  function handleListen(): void {
    console.log("Listening");
  }

  async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
    console.log("I hear voices!");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    console.log("jsonString");



    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

      if (url.pathname == "/Anlegen") {
        daten.insertOne(url.query);
      }
      if (url.pathname == "/Ausgeben") {

        _response.write(JSON.stringify(await (daten.find().toArray())));
      }
    }
    _response.end();
  }
}    