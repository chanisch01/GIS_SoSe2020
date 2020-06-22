import * as Http from "http";

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

  function handleRequest(_request) {
    console.log("I hear voices!");

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    _response.write(_request.url);

    _response.end();
  }
