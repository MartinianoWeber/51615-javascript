let productos = [];
const DateTime = luxon.DateTime;
const formulario = document.querySelector("#formulario");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const productList = document.querySelector("#productList");
const sellProduct = document.querySelector("#sellProduct");
const productSelect = document.querySelector("#productSelect");
const customerName = document.querySelector("#customerName");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Queres agregar un nuevo producto?",
    text: "No vas a poder revertir esto!",
    icon: "info",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar acción",
    confirmButtonText: "Si quiero",
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        "El producto fue agregado correctamente",
        "Ya se esta listando, en el stock.",
        "success"
      );
      const producto = {
        id: Date.now(),
        nombre: name.value,
        precio: price.value,
        descripcion: description.value,
      };
      crearProducto(producto);
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
    productList.innerHTML = `<div class="product-card">
    <h3 class="product-name">No hay productos cargados</h3>
    </div>`;
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

function waitForPayment() {
  return new Promise((resolve, reject) => {
    const paymentStatus = Math.random() < 0.5;

    setTimeout(() => {
      if (paymentStatus) {
        resolve("Payment successful");
      } else {
        reject("Payment failed");
      }
    }, 2000); // Simulating a delay for payment processing
  });
}

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

  waitForPayment()
    .then((result) => {
      // Payment successful
      console.log(result);
      Toastify({
        text: `El pago fue correctamente ${
          producto.nombre
        } fue vendido a ${nombreCliente} en ${DateTime.now().toLocaleString()}`,
        duration: 3000,
        position: "center",
        gravity: "bottom",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        close: true,
      }).showToast();

      const index = productos.findIndex((producto) => {
        return producto.id == productoSeleccionado;
      });
      productos.splice(index, 1);
      console.log(productos);
    })
    .catch((error) => {
      console.log(error);
      // Payment failed
      Toastify({
        text: `Fallo el pago.`,
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
      console.log("El proceso de pago ha finalizado");
    });
}

setInterval(() => {
  actualizarProductos();
}, 10000);

function actualizarProductos() {
  console.log("Actualizando lista de productos...");
  verProductos();
}
