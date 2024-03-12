/*
Hay que programar un carrito de compra de fruta.

El cliente eligirá que fruta quiere haciendo click sobre la imagen.
Un mensaje emergente le preguntará qué cantidad quiere.

Esta información se mostrará a la derecha, bajo "Total carrito", 
en <p id="carrito"></p>, de esta forma:
 Kiwi 2 kg x 4,20€/kg = 8,40 €

El total se actualizará con cada compra
 Total Compra: 8,40€
 
Se dará la opción de añadir o no más productos que se mostrarán
a continuación de los anteriores, y se sumará todo en el total. 
Por ejemplo:  
 Kiwi 2 kg x 4, 20€/kg = 8, 40€
 Pomelo 1 kg x 2,50€/kg = 2,50€
 Total Compra: 10,90€

Puedes modificar el código facilitado si ello te ayuda con el ejercicio,
pero deberás justificarlo.

Recuerda la importancia comentar con detalle el código.

 Lo importante es el cálculo, no los estilos css
 */




 /** Hago un alert para confirmar que esta bien vinculado el html y el js */
//  alert("ok") 

/** Necesito 3 variables, el total que me ira dando el total de la compra
 * un array que va guardando las lista de lo que se va seleccionando y un
 * carrito que toma del html el div donde se va mostrando el resultado
  */


let total = 0
let arrayCompra = []
/** cambio en el html los siguientes id's */
let carrito = document.getElementById("carrito")
let preuFinal = document.getElementById("preuFinal")

/** Función comprar, en el html en cada div de fruta, he creado la función oncklic
 * con los parametros del nombre de la fruta  y su precio. Así le damos a la función
 * estos 2 parametros
 */
function comprar(fruta, precio, unidad){
    /**La variable cantidad con el prompt se le pregunta al usuario la cantidad de lo que
     * quiere, con el number convierto lo que introduce en número entero, con el parseFloat 
     * con decimales y con el toFixed() que lo redondee a dos decimales. Es decir que lo 
     * que introduzca el usuario se convierte en un numero de dos decimales
     */
    let cantidad = Number(prompt(`Cuanta ${fruta} quiere:`))
    /** La variable parcial va almacenando la cantidad por el precio de la fruta */
    let parcial  = cantidad * precio
    
    total += parcial
    /** con console.log confirmo que hasta ahora hace lo que quiero  */  
    // console.log(`${cantidad}kg de ${fruta} son: ${parcial}€`);
    // console.log("El total es", total);
    /******************************revisar tema decimales */
    
    /**Creo un objeto con los parametros de entrada mas la cantidad que quiere el cliente */
    /** el objeto compra tiene 4 propiedades: nombre de la fruta, el precio, la cantidad y 
     * con va la compra por el momento
     */
    let compra = new Object()
    compra.nombre = fruta
    compra.precio = precio
    compra.unidad = unidad
    compra.cantidad = cantidad.toFixed(2)
    compra.parcial = parcial.toFixed(2)

    /** Se va guardando cada elemento que se va pidiendo en el array compra */
    arrayCompra.push(compra)

    /** Y mostramos la compra con otro array */
   mostrarCompra()
}

/**Funccion borrar, el parametro posicion lo coge del 
 * i del for y se elimina con el splice(posicion y cantidad a eliminar)
 * antes al total le elimino el precio del parcial */
function borrar(posicion){
    total = total - arrayCompra[posicion].parcial
    arrayCompra.splice(posicion,1)

    mostrarCompra()
}

/** Funcion mostarCompra() que va mostran */
function mostrarCompra(){
  
/** Declaro la variable mensaje que muestra el mensaje que sale en el listado de la compra */
let mensaje = ""
    for (let i = 0; i < arrayCompra.length; i++) {
        mensaje += `<p><i class="fa-solid fa-trash-can borrar" onclick = "borrar(${i})"></i> ${arrayCompra[i].nombre} ${arrayCompra[i].cantidad} x ${arrayCompra[i].precio}/${arrayCompra[i].unidad} = ${arrayCompra[i].parcial}€</p>`
    }

    /** console.log de control */
    console.log(arrayCompra);
    console.log(total);
    /** actualizamos el html el id de carrito y preuFinal */
    carrito.innerHTML = mensaje
    preuFinal.innerHTML = total.toFixed(2)

}





 












// /** Creo un array que voy a necesitar par ir guardando las frutas */
// let listaCompra = [];

// let listaFrutas =[]

// document.getElementById("pomelo").onclick = () => {prompt("que quiere")}

// /** Declaro la primera variable que viene del html vinculada al id */
// const htmlPomelo = document.getElementById("pomelo");






/** Hago un EventListern para que al hacer click en el pomelo pase algo, ej un alert */
// htmlPomelo.addEventListener("click", () => {alert("soy un pomelo")})

// /** Como funciona ahora el prompt preguntandole la cantidad que quiere */
// htmlPomelo.addEventListener("click", (e) => {
//     e.preventDefault()
//     /** Creo una constante que me va a guardar lo que pregunto */
//     let cantidad = ""
//     cantidad = prompt("Que cantidad quiere")
//     listaCompra.push(cantidad)
//     console.log(listaCompra);

// })










 