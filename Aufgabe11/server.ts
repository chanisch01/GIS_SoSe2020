import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe11 {

  let collection: Mongo.Collection;
  let databaseUrl: string = "mongodb+srv://new_user:hallo@chanida.jbyiv.mongodb.net/Aufgabe?retryWrites=true&w=majority";

  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  function startServer(_port: number | string): void {

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(_port);
  }

  function handleListen(): void {

    console.log("Listening");
  }

  startServer(port);
  connectToDatabase(databaseUrl);


  async function connectToDatabase(_url: string): Promise<void> {

    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();

    collection = mongoClient.db("Aufgabe").collection("Daten");
    console.log("Database connection ", collection != undefined);
  }

  async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");


    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

      if (url.pathname == "/abschicken")
        collection.insertOne(url.query);


      else if (url.pathname == "/erhalten") {


        _response.write(JSON.stringify(await collection.find().toArray()));
      }
    }

    _response.end();

  }
}

