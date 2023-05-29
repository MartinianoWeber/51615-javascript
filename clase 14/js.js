// const nombres1 = ["Juan", "Julieta"];
// const nombres2 = ["Pedro", "Pablo"];

// const nombres = [...nombres1, ...nombres2]; // ["Juan", "Julieta", "Pedro", "Pablo"]

// const obj = {
//   ...nombres,
// };

// const obj2 = {
//   ...nombres1,
//   ...nombres2,
// };
// console.log("Ejem", obj); // {0: "Juan", 1: "Julieta", 2: "Pedro", 3: "Pablo"}
// console.log("Ejem2", obj2); // {1: "Pedro", 2: "Pablo"}
// CONSULTAMOS SOBRE LA PERSONA; SUS DATOS PERSONALES.
// const objPersona = {
//   nombre: "Juan",
//   apellido: "Perez",
//   edad: 20,
//   direccion: {
//     ciudad: "Buenos Aires",
//     zip: 1234,
//     lat: 14.3232,
//     lng: 34.9233321,
//   },
// };

// const objFinalCompra = {
//   ...objPersona,
//   productosComprados: ["Zapatillas", "Camisa", "Pantalon"],
//   total: 5000,
// };
// console.log("Primer form", objPersona);
// console.log("Segundo form", objFinalCompra);

// function datosPersonales(...datos) {
//   console.log(datos);
// }

// datosPersonales(11, 23, 24);

// function sumar(...numero) {
//   const suma = numero.reduce((a, b) => a + b, 0);
//   console.log(suma);
// }
// sumar(10, 10, 10, 5);

let productos = [];

const formulario = document.querySelector("#formulario");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const productList = document.querySelector("#productList");
const sellProduct = document.querySelector("#sellProduct");
const productSelect = document.querySelector("#productSelect");
const customerName = document.querySelector("#customerName");

const DateTime = luxon.DateTime;

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Quieres agregar un nuevo producto?",
    text: "No podrás revertir esto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Agregar",
  }).then((result) => {
    if (result.isConfirmed) {
      const producto = {
        id: Date.now(),
        nombre: name.value,
        precio: price.value,
        descripcion: description.value,
      };
      console.log(producto);
      crearProducto(producto);
      Swal.fire(
        "Producto agregado correctamente!",
        `${producto.nombre} agregado correctamente`,
        "success"
      );
    }
  });
});

function crearProducto(producto) {
  productos.push(producto);
  verProductos();
}

addEventListener("DOMContentLoaded", () => {
  verProductos();
});

function verProductos() {
  if (productos.length > 0) {
    renderizarProductos(productos);
    rederizarProductosSelect(productos);
  }
}

function renderizarProductos(productos) {
  productList.innerHTML = "";
  productos.forEach((producto) => {
    const { nombre, precio, descripcion } = producto;
    productList.innerHTML += `
        <div class="product-card">
        <h3 class="product-name">${nombre}</h3>
        <p class="product-price">${precio}</p>
        <p class="product-description">${descripcion}</p>
        <button class="btn-primary">Comprar</button>
      </div>
        `;
  });
}

function rederizarProductosSelect(productos) {
  productSelect.innerHTML = `<option value="" disabled selected>Seleccione un producto</option>`;
  productos.forEach((producto) => {
    const { nombre, id } = producto;
    productSelect.innerHTML += `
    <option value="${id}">${nombre}</option>
        `;
  });
}

sellProduct.addEventListener("submit", venderProducto);
// sellProduct.addEventListener("submit", (e)=>  venderProducto(e));
// el primer parámetro es un evento, el segundo parámetro es que queremos ejecutar (e)=>  venderProducto(e)

function venderProducto(e) {
  e.preventDefault();
  const productoSeleccionado = productSelect.value;
  const nombreCliente = customerName.value;
  const producto = productos.find((producto) => {
    return producto.id == productoSeleccionado;
  });
  const objetoProducto = {
    ...producto,
    nombreCliente,
  };

  Toastify({
    text: `El producto ${objetoProducto.nombre} fue vendido a ${
      objetoProducto.nombreCliente
    } el dia ${DateTime.now().toLocaleString(DateTime.DATE_FULL)}`,
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },

    duration: 3000,
    close: true,
  }).showToast();
  console.log(objetoProducto);
}
