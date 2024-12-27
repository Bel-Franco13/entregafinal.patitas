const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en perros.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoPerro = document.createElement("div");
    nuevoPerro.classList = "tarjeta-producto"
    nuevoPerro.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg" alt="Perro 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevoPerro);
    nuevoPerro.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(perros);

