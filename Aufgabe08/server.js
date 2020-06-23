"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
//Konsole gibt Starting server aus
  console.log("Starting server");
  let port = Number(process.env.PORT);
  if (!port)

  
    //Port wird auf 8100 gesetzt
    port = 8100;

  //Server wird erstellt
  let server = Http.createServer();

  //Funktion handleRequest wird aufgerufen
  server.addListener("request", handleRequest);
  
  //HandleListen Funktion wird aufgerufen
  server.addListener("listening", handleListen);
  
  //Server hört/reagiert auf Port und startet
  server.listen(port);

   //Konsole gibt Listening aus wenn Funktion aufgerufen wird
  function handleListen() {
    console.log("Listening");
  }

  
  //Konsole gibt I hear voices aus (sobald Funktion aufgerufen wird)
  function handleRequest(_request) {
    console.log("I hear voices!");

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
   //Url wird ausgegeben
    _response.write(_request.url);
    //Response wird beendet
    _response.end();
  }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map