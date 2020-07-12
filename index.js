function obtenerPalabras(){
    return JSON.parse(localStorage.getItem("palabras")) || {};
}


function guardarPalabras(palabras){
    return localStorage.setItem("palabras", JSON.stringify(palabras));
}

/* const palabras = {
    "dog": "perro",
    "cat": "Gato"
} */

function molde(nombre, definicion){
    return `
    <li>${nombre} = ${definicion} <span class="eliminar" onclick="borrar('${nombre}')">X</span></li>
    `
}

function borrar(palabra){
    const palabras = obtenerPalabras();
    delete palabras[palabra]
    guardarPalabras(palabras);
    agregarHtml();
}

function agregarPalabras(){
    const primer = document.querySelector("#primer").value;
    const segundo = document.querySelector("#segundo").value;
    if (primer != "" && segundo != "") {
        
        const palabras = obtenerPalabras();
        palabras[primer] = segundo;
        guardarPalabras(palabras);
        document.querySelector("#primer").value = "";
        document.querySelector("#segundo").value = "";
        agregarHtml(); 
    }

}


function agregarHtml(){
    const palabras = obtenerPalabras();
    const respuesta = Object.keys(palabras).map(llave => molde(llave, palabras[llave]));
    document.querySelector("#caja ul").innerHTML = respuesta.join("\n");
}

agregarHtml();