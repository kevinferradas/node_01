const http = require("node:http");

// Obtener los datos del .env
process.loadEnvFile();
console.log(process.env.PASSWORD);
const PUERTO = process.env.PORT || process.argv[2] || 8888;

let title = ""
let h1 = ""
let enlace = ""

const server = http.createServer((req, res) => {
  
  if (req.url == "/") {
    // console.log("Conectados a la raiz del server");
    res.writeHead(200, {"content-type": "text/html"})
    console.log(res.statusCode);
    title = "Home"
    h1 = "<h1>Estamos en / desde Node con amor</h1>"
    enlace = ""


  } else if (req.url == "/contacto") {
    // console.log("Conectados a /contacto");
    res.writeHead(200, {"content-type": "text/html"})
    title = "Contacto"
    h1 = "<h1>Estamos en /contacto</h1>"

  } else {
    // console.log("Ruta desconocida");
    res.writeHead(404, {"content-type": "text/html"})
    console.log(res.statusCode);
    title = "Error 404"
    h1 = "<h1>Error 404</h1>"
    enlace = "<a href='/'>Volver a 🏠</a>"

  }

  const html = `
  <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
    h1 { color: green; font-family: Arial;}
    </style> 
</head>
<body>
    ${h1}
    ${enlace}
</body>
</html>
  `

//   res.write(html)
  res.end(html)
});

server.listen(PUERTO, () => {
  console.log(`Servidor levantado en http://localhost:${PUERTO}`);
});