import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe11 {

  let collection: Mongo.Collection;
  let _url: string = "mongodb+srv://new_user:hallo@chanida.jbyiv.mongodb.net/Aufgabe11?retryWrites=true&w=majority";

  let port: number | string | undefined = Number(process.env.PORT);

  if (!port)
    port = 8100;
 
  startServer(port);
  dataBase();


  function startServer(_port: number | string): void {
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.listen(port);
  }
 

  async function dataBase(): Promise<void> {
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    collection = mongoClient.db("Aufgabe11").collection("Daten");
    if (collection) {
      console.log("Connect to Database!");
    }
  }

  async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
    console.log("I hear voices!");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

      if (url.pathname == "/push") {
        collection.insertOne(url.query);
      }

      else if (url.pathname == "/pull") {
        try {
          let findings: Mongo.Cursor<string> = collection.find();
          let findingsArray: string[] = await findings.toArray();
          _response.write(JSON.stringify(findingsArray));
         
        } catch (error) {
          console.log(error);
        }

      }
    }
    _response.end();
  }
}