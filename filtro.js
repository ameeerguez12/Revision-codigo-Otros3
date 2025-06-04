// Tenemos un li de productos
//Agregué todas las imágenes a mi nueva carpeta de public y modifique la ruta de cada una 
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./public/taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./public/taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./public/bota-negra.jpg" },     
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./public/bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./public/zapato-rojo.jpg" }
];

const li = document.getElementById("lista-de-productos");    //	cambie el getElementsByName po ID ya que no  encuentra el div porque getElementsByName busca por name, no por id.
const $i = document.querySelector("input"); // Se agrega correctamente la  class="input" 

function displayProductos(lista) {        //Creé la función displayProductos(lista) y puse dentro de ella el código que genera los productos dinámicamente.
  li.innerHTML = "";
  for (let i = 0; i < lista.length; i++) {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = lista[i].nombre;

    const imagen = document.createElement("img");     //Cambie var por const para evitar problemas de scope.
    imagen.setAttribute("src", lista[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);
    li.appendChild(d);
  }
}

displayProductos(productos);                             // Moví el bloque a la función displayProductos() y llamé esa función al inicio y dentro del botón

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
  const texto = $i.value.trim().toLowerCase();          //  Le agregué .trim().toLowerCase() para evitar errores por espacios o mayúsculas.
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
};

const filtrado = (productos = [], texto) => {
  return productos.filter(item =>
    item.tipo.includes(texto) || item.color.includes(texto)
  );
};
