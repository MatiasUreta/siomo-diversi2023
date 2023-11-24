let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

//Funcion que carga la info del item selecionado
function cargar(item) {
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid black";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripcion del modelo";

    precioSeleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML;
}

function quitarBordes() {
    var items = document.getElementsByClassName("item");
    for (i = 0; i < items.length; i++) {
        items[i].style.border = "none";
    }
}

function cerrar() {
    mostrador.style.width = "100%";
    seleccion.style.width = "0";
    seleccion.style.opacity = "0";
    quitarBordes();
}


//Carrito
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
    },
    {
        nombre: 'Gaetano',
        precio: 4000,
        imagen: './img/Gaetano.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Romeo',
        precio: 1000,
        imagen: './img/Romeo.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Giovanni Azul',
        precio: 1000,
        imagen: './img/Giovanni Azul.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Donato Picado-Marron',
        precio: 1000,
        imagen: './img/Donatto picado marron.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Filippo',
        precio: 1000,
        imagen: './img/Filippo.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Rocco',
        precio: 2000,
        imagen: './img/Rocco.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Enzo',
        precio: 2000,
        imagen: './img/Enzo.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Dino',
        precio: 2000,
        imagen: './img/Dino.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Carmine',
        precio: 2000,
        imagen: './img/Carmine.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Greta-Marron',
        precio: 2000,
        imagen: './img/Greta Marron.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Pascuale',
        precio: 2000,
        imagen: './img/Pascuale.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Luigi',
        precio: 2000,
        imagen: './img/Luigi.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Donna',
        precio: 2000,
        imagen: './img/Donna.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Narciso',
        precio: 2000,
        imagen: './img/Narciso.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Isabell',
        precio: 2000,
        imagen: './img/Isabel.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Gianni-Negro',
        precio: 2000,
        imagen: './img/Gianni negra.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Renato Suela',
        precio: 2000,
        imagen: './img/Renato Suela.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Greta-Negro',
        precio: 2000,
        imagen: './img/Greta Negro.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Placido',
        precio: 2000,
        imagen: './img/Placido.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Giovanni-Verde',
        precio: 2000,
        imagen: './img/Giovanni Verde.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Gino-Negro',
        precio: 2000,
        imagen: './img/Gino negro.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Vicenzo',
        precio: 2000,
        imagen: './img/Viccenzo.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Seleccione',
        precio: 2000,
        imagen: './img/Seleccione.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Mauro',
        precio: 2000,
        imagen: './img/Mauro.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Gianni-Tabaco',
        precio: 2000,
        imagen: './img/Gianni tabaco.png',
        talle: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        nombre: 'Tino',
        precio: 2000,
        imagen: './img/Tino.png',
        talle: [39, 40, 41, 42, 43, 44, 45]   
    },
    {
        nombre: 'Bruno Picado-Negro',
        precio: 2000,
        imagen: './img/Bruno picado negro.png',
        talle: [39, 40, 41, 42, 43, 44, 45]   
    }

];

let carrito = [];

function agregarAlCarrito(indice) {
    carrito.push(productos[indice]);
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
  }
  

  function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1); // Eliminar el producto del carrito
    actualizarCarrito(); // Actualizar la interfaz de usuario
  }

  document.querySelector('.btnAgregarCarrito').addEventListener('click', () => {
  agregarAlCarrito(indiceDelProductoActual);
});


function actualizarCarrito() {
    // Actualizar el modal
    // ...
  
    // Actualizar el contador de productos
    let contador = document.querySelector('#contadorCarrito');
    contador.textContent = carrito.length;
  }
  