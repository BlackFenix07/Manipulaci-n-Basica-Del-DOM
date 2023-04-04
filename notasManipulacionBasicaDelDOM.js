const h = document.querySelector("");
const p = document.querySelector("");
const input = document.querySelector("");
const id = document.getElementById("#");
const clase = document.getElementsByClassName(".");

h1.innerHTML = ""; // Convierte todo a código HTML.

h1.innerText = ""; // Convierte todo a texto.

h1.classList.add(""); // Agrega clases a los elementos.

h1.classList.remove(""); // Elimina clases de los elementos.

h1.classList.toggle(""); // Alterna un valor booleano (lo elimina si está presente y lo añade si no lo está).

h1.classList.contains(""); // Devuelve true o false dependiendo de si el elemento tiene o no la clase que se indique.

h1.setAttribute("class", "verde"); // Modifica atributos de los elementos.

h1.appendChild(img); // Agrega un elemento hijo al elemento que se indique. En este caso, una imagen.

input.value = "456"; // Cambia el valor del atributo.

const img = document.createElement("img"); // Crea una imagen.
img.setAttribute("src", "https://images2.alphacoders.com/598/598673.jpg"); // Agrega un atributo con su valor al elemento que se indique.
img.setAttribute("width", "350px");