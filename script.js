let carrito = [];

function agregarAlCarrito(elemento) {
    let producto = elemento.parentElement;
    let nombre = producto.getAttribute("data-nombre");
    let precio = producto.getAttribute("data-precio");

    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    let listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.innerHTML = "";

    carrito.forEach((producto, index) => {
        let li = document.createElement("li");
        li.textContent = `${producto.nombre} - Q${producto.precio}`;
        listaCarrito.appendChild(li);
    });

    actualizarWhatsApp();
}

function actualizarWhatsApp() {
    let numeroWhatsApp = "50235879734";  // Reemplaza con tu número de WhatsApp
    let mensaje = "Hola, quiero comprar:\n";

    carrito.forEach((producto) => {
        mensaje += `- ${producto.nombre} por Q${producto.precio}\n`;
    });

    let link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    document.getElementById("whatsapp-link").href = link;
}
