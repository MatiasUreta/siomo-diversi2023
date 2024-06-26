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
		};

		localStorage.setItem('cartProducts', JSON.stringify(allProducts));


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

		localStorage.setItem('cartProducts', JSON.stringify(allProducts));

		showHTML();
	}
});

// Cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
	// Recupera los productos del almacenamiento local
	const savedProducts = JSON.parse(localStorage.getItem('cartProducts'));

	if (savedProducts) {
		allProducts = savedProducts;
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

		total = total + parseFloat((product.quantity * product.price.slice(1)).toFixed(3));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total.toFixed(3)}`; // Redondea a 3 decimales
	countProducts.innerText = totalOfProducts;
};



// Ordenar de menor a mayor
allProducts.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));

// Ordenar de mayor a menor
allProducts.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));


// Ordenar de más vendido a menos vendido
allProducts.sort((a, b) => b.sold - a.sold);


// Barra de búsqueda con texto predictivo
var searchText = 'Zapatos';  // Reemplaza esto con el texto de búsqueda real
var filteredProducts = allProducts.filter(product => product.title.includes(searchText));


//SweetAlert
document.getElementById('botonDescuento').addEventListener('click', function() {
    Swal.fire({
        title: '¡Promos de Marzo!',
        imageUrl: `../img/descuentos_marzo_siamo.jpeg`,
        imageWidth: 900,
        imageHeight: 700,
        imageAlt: 'Imagen de descuento',
    });
});


document.addEventListener("DOMContentLoaded", function() {
	// Crear un objeto con los precios por categoría
	let preciosPorCategoria = {
		"zapatos": 82.990,
		"borcegos": 94.990,
		"botas": 89.990,
		"panchas": 78.990,
		"zapatillasgianni": 79.990,
		"zapatillasgino": 84.990,
		"botinetas": 89.990
	};
  
	// Función para actualizar los precios por categoría
	function actualizarPreciosPorCategoria() {
		for (let categoria in preciosPorCategoria) {
			let precio = preciosPorCategoria[categoria];
			let elementos = document.getElementsByClassName(categoria);
  
			for (let i = 0; i < elementos.length; i++) {
				let elementoPrecio = elementos[i].getElementsByClassName('price')[0];
				elementoPrecio.textContent = "$" + precio.toFixed(3);
			}
		}
	}
  
	// Llamar a la función para actualizar los precios
	actualizarPreciosPorCategoria();
  });
  