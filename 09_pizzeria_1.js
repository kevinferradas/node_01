// En los objetos de JS, la clave no necesariamente debe ir entre comillas
// pero nos acostumbraremos a ponerlas ( y las dobles) porque en objetos JSON  es obligatorio.
const pizzas = [

    {"tipo": "Cuatro Quesos", "precio": 18.00},
    {"tipo": "Margherita", "precio": 16.00},
    {"tipo": "Napolitana", "precio": 17.25},
    {"tipo": "Diavola", "precio": 16.50},
]
let mensaje = ""
// Para ejecutar el programa:
// node 09_pizzeria_1.js
if (process.argv.length == 2){

    let menu = "Pizzeria Nodini\n"
    menu +=  "*".repeat(menu.length +1)

    for (let i = 0 ; i<pizzas.length; i++){
        menu+= `\n\t${i + 1}. Pizza ${pizzas[i].tipo} a ${pizzas[i].precio.toFixed(2)}€`
    }

    menu += "\n¿Cuál es su elección?\n\n"

    console.log("\n\n", menu);

} else if(process.argv.length == 3){

    let indice = process.argv[2]
    mensaje = `
    Has elegido pizza ${pizzas[indice -1].tipo}. Importe : ${pizzas[indice -1].precio}
    `
} else {

    mensaje = "Demasiados argumentos en la petición"
}
console.log(mensaje, "\n\n");


// console.log(process.argv.length);

