const http = require("node:http")

const  server = http.createServer( (req, res) => {
    console.log("Has hecho una peticion desde Node ");

})
server.listen(8888 , () => {
    console.log("Servidor levantado otra vez en http://localhost:8888");
})
// req--> request ( peticion)
// res--> response (respuesta)

