const fs = require ("node:fs")
// Forma sincrónica: si no acaba una tarea , no hace la siguiente .
// let texto = "En un lugar de la Mancha de cuyo nombre"
// fs.writeFileSync("prueba.txt", texto, "UTF-8")

// let append = " no quiero acordarme\n"
// fs.appendFileSync("prueba.txt", append, "UTF-8")

// append = "\t Cervantes\n"
// // \t--> desplazamiento horizontal
// fs.appendFileSync("prueba.txt", append, "UTF-8")

// let prueba = fs.readFileSync("prueba.txt", "utf-8")
// console.log(prueba);



// if (fs.existsSync("temp")) {
// fs.rmdirSync("temp")
// console.log("directorio borrado");
// }
// fs.mkdirSync("temp")

// fs.truncateSync("prueba.txt")

fs.mkdirSync("temp/temp2", {recursive : true})
fs.mkdirSync("temp/temp1", {recursive : true})