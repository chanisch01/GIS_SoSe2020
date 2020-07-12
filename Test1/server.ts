import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe11 {
      
      let studentList: Mongo.Collection;
      let databaseUrl: string = "mongodb+srv://new_user:hallo@chanida.jbyiv.mongodb.net/Test?retryWrites=true&w=majority";
      
      console.log("Starting server");
      
      let port: number = Number(process.env.PORT);
     
      if (!port)
        port = 8100;

      
      connectToDatabase(databaseUrl);
     
     
    
      
      let server: Http.Server = Http.createServer();
      server.addListener("request", handleRequest);
      server.addListener("listening", handleListen);
      server.listen(port);
      
      
      async function connectToDatabase(_url: string): Promise<void> {
          let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
          let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
          await mongoClient.connect();

          studentList = mongoClient.db("Test").collection("Students");
          console.log("Database connection ", studentList != undefined);
      }



      function handleListen(): void {
        console.log("Listening");
      }


   
      async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise <void> {
        
    
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
    
        if (_request.url) {
          let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
          
          if (url.pathname == "/senden") 
            studentList.insertOne(url.query);
          

             else if (url.pathname == "/holen") {
          
             
              _response.write(JSON.stringify(await studentList.find().toArray()));
          
        } 
        }
    
        _response.end();
          }
        
        
        }

