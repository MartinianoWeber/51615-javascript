let productos = [];

const formulario = document.querySelector("#formulario");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const productList = document.querySelector("#productList");
const sellProduct = document.querySelector("#sellProduct");
const productSelect = document.querySelector("#productSelect");
const customerName = document.querySelector("#customerName");
const seccionEditar = document.querySelector("#seccionEditar");
const seccionAgregar = document.querySelector("#seccionAgregar");
const nameEdit = document.querySelector("#nameEdit");
const priceEdit = document.querySelector("#priceEdit");
const descriptionEdit = document.querySelector("#descriptionEdit");
const formularioEdit = document.querySelector("#formularioEditar");

const urlProducts =
  "https://62bf69eabe8ba3a10d697f48.mockapi.io/api/v1/products";

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
  crearProductoAsync(producto);
}

addEventListener("DOMContentLoaded", () => {
  traerProductos();
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
    const { nombre, precio, descripcion, id } = producto;
    productList.innerHTML += `
        <div class="product-card">
        <h3 class="product-name">${nombre}</h3>
        <p class="product-price">${precio}</p>
        <p class="product-description">${descripcion}</p>
        <button class="btn-danger" id=${id}>Eliminar</button>
        <button class="btn-editar" id=${id}>Editar</button>
      </div>
        `;

    const btnEliminar = document.querySelectorAll(".btn-danger");
    const btnEditar = document.querySelectorAll(".btn-editar");
    editarProducto(btnEditar);
    eliminarProducto(btnEliminar);
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
      Toastify({
        text: `${res} ${
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
      eliminarProductoAsync(producto.id);
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

function traerProductos() {
  fetch(urlProducts)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((producto) => {
        productos.push(producto);
      });
      verProductos();
    });
}

async function crearProductoAsync(producto) {
  const resp = await fetch(urlProducts, {
    method: "POST",
    body: JSON.stringify(producto),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await resp.json();
  console.log(data);
  productos.push(data);
  verProductos();
}

function eliminarProducto(querySelector) {
  querySelector.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      eliminarProductoAsync(e.target.id);
    });
  });
}

async function eliminarProductoAsync(id) {
  const resp = await fetch(`${urlProducts}/${id}`, {
    method: "DELETE",
  });
  const data = await resp.json();
  borrarProductoDelArray(data.id);
}

function borrarProductoDelArray(id) {
  const producto = productos.find((producto) => {
    return producto.id == id;
  });
  const index = productos.indexOf(producto); // Nos va a devolver en la posicion que se encuentra el producto dentro del array
  productos.splice(index, 1);
  verProductos();
}

function editarProducto(querySelectors) {
  console.log("entre");
  querySelectors.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      seccionEditar.classList.remove("disable");
      seccionAgregar.classList.add("disable");
      const producto = productos.find((producto) => {
        return producto.id == e.target.id;
      });
      const { nombre, precio, descripcion } = producto;
      nameEdit.value = nombre;
      priceEdit.value = precio;
      descriptionEdit.value = descripcion;
      formularioEdit.id = e.target.id;
    });
  });
}

enviarDataForm();

function enviarDataForm() {
  formularioEdit.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
      nombre: nameEdit.value,
      precio: priceEdit.value,
      descripcion: descriptionEdit.value,
      descuento: false,
    };
    editarProductoAsync(formularioEdit.id, data);
  });
}

async function editarProductoAsync(id, data) {
  const resp = await fetch(`${urlProducts}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const detaRes = await resp.json();
  productos = [];
  traerProductos();
  seccionEditar.classList.add("disable");
  seccionAgregar.classList.remove("disable");
}
// setInterval(verProductos, 15000);
