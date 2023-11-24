let productos = [
    {
      nombre: 'Amadeo',
      precio: 1000,
      imagen: './img/Amadeo.png',
      talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
      nombre: 'Aurelio',
      precio: 2000,
      imagen: './img/Aurelio.png',
      talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
      nombre: 'Renato Verde',
      precio: 1000,
      imagen: './img/Renato Verde.png',
      talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
      nombre: 'Terzo',
      precio: 3000,
      imagen: './img/Terzo.png',
      talle: [39, 40, 41, 42, 43, 44, 45]
    }
  ];
  


function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
  }

  
  function actualizarCarrito() {
    let contenedorCarrito = document.querySelector('.modal-body');
    contenedorCarrito.innerHTML = ''; // Limpiar el carrito
  
    carrito.forEach((producto, indice) => {
      let productoDiv = document.createElement('div');
      productoDiv.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" width="50" height="50">
        <span>${producto.nombre}</span>
        <span>${producto.precio}</span>
        <button onclick="eliminarDelCarrito(${indice})">Eliminar</button>
      `;
      contenedorCarrito.appendChild(productoDiv);
    });
  
    // Actualizar el contador de productos
    let contador = document.querySelector('#cartModalLabel');
    contador.textContent = `Carrito de compras (${carrito.length} productos)`;
  }

  function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1); // Eliminar el producto del carrito
    actualizarCarrito(); // Actualizar la interfaz de usuario
  }
  


  function generarProductos() {
    let contenedor = document.querySelector('.mostrador .fila');
    contenedor.innerHTML = ''; // Limpiar el contenedor
  
    productos.forEach((producto, indice) => {
      let productoDiv = document.createElement('div');
      productoDiv.className = 'item col-lg-2 col-md-3 col-sm-4 col-6';
      productoDiv.innerHTML = `
        <div class="contenedor-foto">
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <p class="descripcion">${producto.nombre}</p>
          <span class="precio">$ ${producto.precio}</span>
        </div>
      `;
      productoDiv.addEventListener('click', () => cargarProducto(indice));
      contenedor.appendChild(productoDiv);
    });
  }

  
  function cargarProducto(indice) {
    let producto = productos[indice];
    let contenedor = document.querySelector('.seleccion .info');
    contenedor.querySelector('img').src = producto.imagen;
    contenedor.querySelector('#modelo').textContent = producto.nombre;
    contenedor.querySelector('#descripcion').textContent = 'Descripcion ' + producto.nombre.toLowerCase();
    contenedor.querySelector('#precio').textContent = '$ ' + producto.precio;
    // Actualizar los talles disponibles
    let selectTalle = contenedor.querySelector('select');
    selectTalle.innerHTML = '';
    producto.talle.forEach(talle => {
      let option = document.createElement('option');
      option.value = talle;
      option.textContent = talle;
      selectTalle.appendChild(option);
    });
  }
  

  // PARA ENVIAR POR WSP EL PEDIDO
let producto = {
  nombre: 'Zapato 1',
  color: 'Negro',
  talle: '42',
  precio: '$1000'
};

// Función para enviar el producto a WhatsApp
function enviarAWhatsapp(producto) {
  // Crea el mensaje que se enviará
  let mensaje = `Hola, estoy interesado en el ${producto.nombre} de color ${producto.color}, talle ${producto.talle}. Su precio es ${producto.precio}.`;

  // Codifica el mensaje para usarlo en una URL
  let mensajeCodificado = encodeURIComponent(mensaje);

  // Crea la URL de WhatsApp
  let url = `https://wa.me/?text=${mensajeCodificado}`;

  // Abre la URL de WhatsApp en una nueva ventana
  window.open(url);
}

// Llama a la función para enviar el producto a WhatsApp
enviarAWhatsapp(producto);
