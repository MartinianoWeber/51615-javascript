let productos = [];

const formulario = document.querySelector("#formulario");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const productList = document.querySelector("#productList");
const sellProduct = document.querySelector("#sellProduct");
const productSelect = document.querySelector("#productSelect");
const customerName = document.querySelector("#customerName");

const urlProducts =
  "https://62bf69eabe8ba3a10d697f48.mockapi.io/api/v1/products";
const urlForm = "https://62bf69eabe8ba3a10d697f48.mockapi.io/api/v1/contacto";

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
  } else {
    productList.innerHTML = `<p class="no-products">No hay productos</p>`;
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

  esperandoElPago()
    .then((res) => {
      const index = productos.findIndex((producto) => {
        return producto.id == productoSeleccionado;
      });
      Toastify({
        text: `${res} ${
          index.nombre
        } fue vendido a ${nombreCliente} en ${DateTime.now().toLocaleString()}`,
        duration: 3000,
        position: "center",
        gravity: "bottom",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        close: true,
      }).showToast();

      productos.splice(index, 1);
    })
    .catch((err) => {
      // Pago FALLO
      Toastify({
        text: `${err}`,
        duration: 3000,
        position: "center",
        gravity: "bottom",
        style: {
          background: "linear-gradient(to right, #ff5858, #ff6d6d)",
        },
        close: true,
      }).showToast();
    })
    .finally(() => {
      verProductos();
    });
}

function esperandoElPago() {
  return new Promise((resolve, reject) => {
    const validarPago = Math.random() < 0.5; // Nos devulve true o false(ES ALEATORIO)
    setTimeout(() => {
      if (validarPago) {
        resolve("El pago fue exitoso");
      } else {
        reject("El pago no fue exitoso");
      }
    }, 3000);
  });
}

setInterval(verProductos, 15000);
