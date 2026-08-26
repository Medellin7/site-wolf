
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1 style=\"color:green; text-align:center; margin-top:20vh;\">SERVIDOR NODE PURO FUNCIONANDO PERFEITAMENTE!</h1>");
});
server.listen(8080, () => {
  console.log("Servidor rodando na porta 8080...");
});

