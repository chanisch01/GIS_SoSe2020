import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe11 {
  
  console.log("Starting server");

  let formData: Mongo.Collection;
  let mongoUrl: string = "mongodb+srv://new_user:hallo@chanida.jbyiv.mongodb.net/Test?retryWrites=true&w=majority";

 
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  function startServer(): void {  
        
      let server: Http.Server = Http.createServer(); 

      server.addListener("request", handleRequest);    
      server.addListener("listening", handleListen);  
      server.listen(port);
  }

  
  startServer();
  connectToDatabase(mongoUrl);

  async function connectToDatabase(_url: string): Promise<void> {
    let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    formData =  mongoClient.db("test").collection("students");
    console.log("Connection to Database", formData != undefined);
  }

  function handleListen(): void {
      console.log("Listening");
    }
 
  async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
      console.log("I hear voices!");
      _response.setHeader("content-type", "text/html; charset=utf-8");
      _response.setHeader("Access-Control-Allow-Origin", "*");
      console.log("Hallo");
      
       
  
      if (_request.url) {
          let url: Url.UrlWithParsedQuery  = Url.parse(_request.url, true);
  
          if (url.pathname == "/datenbank") { 
            formData.insertOne(url.query);     
        } 
          if (url.pathname == "/pull") {
         
         _response.write(JSON.stringify(await(formData.find().toArray())));
          }
      }
      _response.end();
    } 
  }    