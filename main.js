

let btnMostrar = document.getElementById("btnMostrar");
//console.log(document); //document punto de inicio para revisar el contenido del documento

console.log(document.getElementById("encabezado1"));

let encabezado1 = document.getElementById("encabezado1");
console.log(encabezado1.innerText); // innerText es una propiedade de la etiqueta que esta almacenado y es una propiedad de lectura y escrita
encabezado1.innerText= "Ejercicio DOM"; //ejemplo de escritura con innerText (ahora este es el nuevo "encabezado1")
// si se hace una mala llamada al encabezado  dara un error de null porque no se
//puede modificar por lo que lo mejor es copiar y no escribir el encabezado

// ejercicio cambiar el h2 a ingles


let encabezado2 = document.getElementById("encabezado2"); //tra elementos por id
encabezado2.innerText= "DOM Exercise";
console.log(encabezado2.innerText);

encabezado1.innerHTML = "Ejercicio DOM";

function modifica(){
    encabezado1.innerHTML += "<em> Ejercicio</em> DOM";
    encabezado2.innerHTML= "DOM Excercise";
}

let listas = document.getElementsByTagName("ul"); //trae elementos por su tag name
console.log(listas.length); // nos da la cantidad de ul en este caso 2
console.log(listas [0]);
console.log(listas.item (0))

let elementos = document.getElementsByClassName("list-group-item"); // trae elementos por su clase
console.log(elementos.length); //10
console.log(elementos.item(1));
console.log(elementos.item(2));

let  otroElemento = document.querySelector("ul>li"); // este selector va por la primera referencia que encuentra y que coioncida
console.log("otroElemento: ", otroElemento);

let otrosElementos = document.querySelectorAll("ul>li"); // regresa una lista estatica no viva de todos los elementos

btnMostrar.addEventListener("click", function(event){
    console.log("botoón btnModificar presionado");
}); //escucha los eventos que ocurren con ".addEventListener"


btnMostrar.addEventListener("click", function(event){
    event.preventDefault(); //no hagas lo que haces por defecto
    console.log("botoón btnModificar presionado");

    let element = document.createElement("li");
    element.innerText="Another item"; //(li) crea otro elemento

    let element2 = element.cloneNode(true) //crea clona el elemento element com uno nuevo
    //listas.item(0).before(element);
    //listas.item(0).prepend(element2); //coloca al elemento clonado en la poscicion seleccionada en este caso "prepend"

    listas.item(0).append(element);
    listas.item(0).after(element2);

}); //escucha los eventos que ocurren con ".addEventListener"

