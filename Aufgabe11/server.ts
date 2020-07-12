import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe11 {

  let collection: Mongo.Collection;
  let databaseUrl: string = "mongodb+srv://new_user:hallo@chanida.jbyiv.mongodb.net/Test?retryWrites=true&w=majority";
  connectToDatabase(databaseUrl);

  console.log("Starting Server");

  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  async function connectToDatabase(_url: string): Promise<void> {

    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();

    collection = mongoClient.db("Test").collection("Students");
  }

  function handleListen(): void {
    console.log("Listening");
  }

  async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");


    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      let pathname: String | null = url.pathname;

      if (pathname == "/abschicken") {

        collection.insertOne(url.query);

      } else if (pathname == "/erhalten") {
        _response.write(JSON.stringify(await collection.find().toArray()));
      }
    }

    _response.end();
  }
}