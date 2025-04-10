
let encabezado1 = document.getElementById("encabezado1");
let btnMostrar = document.getElementById("btnMostrar");
//console.log(document); //document punto de inicio para revisar el contenido del documento
let txtRFC = document.getElementById("txtRFC");
let txtTelefono = document.getElementById("txtTelefono");
let encabezado2 = document.getElementById("encabezado2"); //tra elementos por id
let listas = document.getElementsByTagName("ul"); //trae elementos por su tag name
let elementos = document.getElementsByClassName("list-group-item"); // trae elementos por su clase
let otroElemento = document.querySelector("ul>li"); // este selector va por la primera referencia que encuentra y que coioncida
let element2 = document.cloneNode(true) //crea clona el elemento element com uno nuevo y puede llamarse con otro nombre para colocarlos en las distintas posiciones de la lista
let otrosElementos = document.querySelectorAll("ul>li"); // regresa una lista estatica no viva de todos los elementos
let element = document.createElement("li");
let txtCurp = document.getElementById("txtCurp");


console.log(document.getElementById("encabezado1"));


console.log(encabezado1.innerText); // innerText es una propiedade de la etiqueta que esta almacenado y es una propiedad de lectura y escrita
encabezado1.innerText= "Ejercicio DOM"; //ejemplo de escritura con innerText (ahora este es el nuevo "encabezado1")
// si se hace una mala llamada al encabezado  dara un error de null porque no se
//puede modificar por lo que lo mejor es copiar y no escribir el encabezado

// ejercicio cambiar el h2 a ingles



encabezado2.innerText= "DOM Exercice";
console.log(encabezado2.innerText);

encabezado1.innerHTML = "Ejercicio DOM";

function modifica(){
    encabezado1.innerHTML += "<em> Ejercicio</em> DOM";
    encabezado2.innerHTML = "DOM Excercise";
}


console.log(listas.length); // nos da la cantidad de ul en este caso 2
console.log(listas [0]);
console.log(listas.item (0))


console.log(elementos.length); //10
console.log(elementos.item(1));
console.log(elementos.item(2));


console.log("otroElemento: ", otroElemento);



btnMostrar.addEventListener("click", function(event){
    console.log("botón btnModificar presionado");
}); //escucha los eventos que ocurren con ".addEventListener"


btnMostrar.addEventListener("click", function(event){
    event.preventDefault(); //no hagas lo que haces por defecto
    console.log("botoón btnModificar presionado");

    
    element.innerText="Another item"; //(li) crea otro elemento

   
    //listas.item(0).before(element);
    //listas.item(0).prepend(element2); //coloca al elemento clonado en la poscicion seleccionada en este caso "prepend"

    //before inserta el elemento antes de la lista
    //prepend inserta el elemento al inicio de la lista
    //append inserta el elmento al final de la lista
    //after inserta el elemento despues de la lista

    //listas.item(0).append(element);
    //listas.item(0).after(element2);

   // listas.item(1).insertAdjacentElement("afterbegin",element)
   // listas.item(1).insertAdjacentElement("afterbegin",element2)
    listas.item(1).insertAdjacentHTML("beforebegin",`<li class="list-group-item">Another new item</li>`);
    listas.item(1).insertAdjacentHTML("afterend",`<li class="list-group-item">Another new item</li>`);
    listas.item(1).insertAdjacentHTML("beforeend",`<li class="list-group-item">Another new item</li>`);
    listas.item(1).insertAdjacentHTML("afterbegin",`<li class="list-group-item">Another new item</li>`);


    // insert adjacent element mete los recursos en el contenido de la pagina html
    //insert adjacent html mete los recursos al html
}); //escucha los eventos que ocurren con ".addEventListener"
//btnMostrar

// se ejecuta cuando termina de cargar todos los elementos de la pagina
window.addEventListener("load", function(event){
    console.log("se termino de cargar la pagina");
}); //load


function txttoUpper(event){
    event.target.value = event.target.value.trim().toUpperCase();
}// automatizacion del evento de hacer las entradas a mayusculas y quitar espacios

// blur -> cuando se sale del campo
// txtRFC.addEventListener("blur", function (event){
//     event.preventDefault();
//     txtRFC.value = txtRFC.value.toUpperCase();
// }) //txtRFC

txtRFC.addEventListener("blur", txttoUpper); //nueva forma de rfc  ya con automatización
txtCurp.addEventListener("blur", txttoUpper);//nueva forma de curp  ya con automatización

txtTelefono.addEventListener("blur", function(event){
    event.preventDefault();
    txtTelefono.value = txtTelefono.value.trim().slice(0,10); //quitar espacios (trim) y dejar solo ingresar una cantidad de números (slice)
}); // txtTelefono

// txtCurp.addEventListener("blur", function (event){
//     event.preventDefault();
//     txtCurp.value = txtCurp.value.toUpperCase();
// }) //txtCurp