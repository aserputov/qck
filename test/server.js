import finalhandler from "finalhandler";
import { createServer } from "http";
import serveStatic from "serve-static";

// Serve test/ folder
const serve = serveStatic("test", { index: ["index.html", "index.htm"] });

const server = createServer(function onRequest(req, res) {
  serve(req, res, finalhandler(req, res));
});

export function start(port) {
  return server.listen(port || 3333);
}
export function stop() {
  return server.close();
}
