const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};



/* CARRITO ANTERIOR*/
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


//NavBar
document.getElementById('navbarButton').addEventListener('click', function () {
    var navbar = document.getElementById('navbarNavDropdown');
    if (navbar.classList.contains('collapse')) {
        navbar.classList.remove('collapse');
    } else {
        navbar.classList.add('collapse');
    }
});



//Carrito
const infoProduct = [
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


// agregar talle y color al carrito
// Primero, selecciona los elementos de talle y color
let talles = document.querySelectorAll('.btnTalles');
let colores = document.querySelectorAll('.circulo');

// Variables para guardar el talle y el color seleccionados
let talleSeleccionado = null;
let colorSeleccionado = null;
talles.forEach(talle => {
    talle.addEventListener('click', function() {
        talleSeleccionado = this.innerText;
    });
});
colores.forEach(color => {
    color.addEventListener('click', function() {
        colorSeleccionado = this.style.backgroundColor;
    });
});

