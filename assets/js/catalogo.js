const catalogo = [
    {
        title: "El guardián entre el centeno",
        author: "J.D. Salinger",
        code: "001",
        description: "La historia de Holden Caulfield, un joven que narra sus experiencias y conflictos tras ser expulsado de su escuela.",
        image: "https://m.media-amazon.com/images/I/81-9li0FuwL._SL1500_.jpg",
        price: 19990
    }, {
        title: "Fight club",
        author: "Chuck Palahniuk",
        code: "002",
        description: "Un hombre insomne y desencantado funda un club secreto de peleas como forma de rebelión contra la sociedad moderna.",
        image: "https://u-mercari-images.mercdn.net/photos/m30412987278_2.jpg",
        price: 14990
    }, {
        title: "El hombre y sus símbolos",
        author: "Carl Gustav Jung",
        code: "003",
        description: "Una introducción accesible a la psicología de los símbolos y el inconsciente, escrita por Jung y sus colaboradores.",
        image: "https://m.media-amazon.com/images/I/810RavjOUrL._SL1500_.jpg",
        price: 19990
    }, {
        title: "El arte de la guerra",
        author: "Sun Tzu",
        code: "004",
        description: "Antiguo tratado chino sobre estrategia militar y tácticas aplicables también a la vida y los negocios.",
        image: "https://pictures.abebooks.com/inventory/30188708710.jpg",
        price: 9990
    }, {
        title: "El principito",
        author: "Antoine de Saint-Exupéry",
        code: "005",
        description: "Un cuento poético sobre un pequeño príncipe que viaja por distintos planetas y reflexiona sobre la vida y la amistad.",
        image: "https://static.zarahome.net/assets/public/795b/018f/e8344b7588b6/321d1d6df0e8/48635052999-a7/48635052999-a7.jpg?ts=1731677199220&f=auto&w=819",
        price: 24990
    }, {
        title: "El alquimista",
        author: "Paulo Coelho",
        code: "006",
        description: "La travesía de Santiago, un joven pastor andaluz, en busca de su leyenda personal y el significado de sus sueños.",
        image: "https://cloud10.todocoleccion.online/libros-segunda-mano/tc/2021/05/05/20/261273695.webp",
        price: 19990
    }, {
        title: "Alas de sangre",
        author: "Rebecca Yarros",
        code: "007",
        description: "Una joven debe sobrevivir a una brutal academia militar de jinetes de dragones, enfrentando desafíos, traiciones y secretos.",
        image: "https://www.megalibros.cl/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/l/alas_de_sangre.jpg",
        price: 26990
    }, {
        title: "Alas de hierro",
        author: "Rebecca Yarros",
        code: "008",
        description: "Secuela de Alas de sangre, sigue a Violet en su lucha por sobrevivir y descubrir la verdad en la academia.",
        image: "https://damemimanga.cl/sitio-web/wp-content/uploads/2025/01/foto-tienda-2025-01-27T183931.107.jpg",
        price: 26990
    }, {
        title: "Alas de ónix",
        author: "Rebecca Yarros",
        code: "009",
        description: "Continuación de la saga de jinetes, retos y traiciones en la academia de dragones.",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_885550-MLV81920527160_012025-F.webp",
        price: 26990
    }, {
        title: "Una corte de rosas y espinas",
        author: "Sarah J. Maas",
        code: "010",
        description: "El primer libro de la saga: Feyre mata a un lobo y debe pagar con su libertad ante un alto fae.",
        image: "https://www.contalles.es/wp-content/uploads/2024/03/una-corte-de-rosas-y-espinas-ed-especial-contalles-benidorm.jpg",
        price: 29990
    }, {
        title: "Una corte de niebla y furia",
        author: "Sarah J. Maas",
        code: "011",
        description: "Feyre regresa a la Corte Primavera con nuevos poderes y un pacto oscuro con Rhysand.",
        image: "https://images.cdn2.buscalibre.com/fit-in/360x360/19/4b/194bdcb66deb24d793e4b85cd8d3a5bf.jpg",
        price: 29990
    }, {
        title: "Una corte de alas y ruina",
        author: "Sarah J. Maas",
        code: "012",
        description: "Feyre debe infiltrarse en la Corte Primavera y desentrañar conspiraciones que amenazan Prythian.",
        image: "https://images.cdn3.buscalibre.com/fit-in/360x360/c5/f3/c5f323f53cc5a1412b8b195288148db8.jpg",
        price: 29990
    }];

const cart = [];
const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const cartSumary = document.getElementById('cart-sumary');

catalogo.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.className = 'col-md-4';
    productCard.innerHTML = `
        <div class="card h-100 bg-2">
          <img src=${product.image} class="card-img-top" alt=${product.title}>
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${product.author}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Código: #${product.code}</h6>
            <p class="card-text">${product.description}</p>
          </div>
          <div class="card-footer bg-transparent border-0">
            <h4 class="card-subtitle mb-2">Precio: $${product.price}</h4>
            <input type="number" name="contador" id="qty-${index}" class="form-control mb-2" placeholder="Cantidad" min="1">
            <input type="checkbox" name="agregar" id="chk-${index}" class="form-check-input mb-2" placeholder="Agregar al carrito">
            <label for="agregar">Agregar al carrito</label>
            <button class="btn btn-primary w-100 bg-1" onclick="addToCart(${index})">Agregar</button>
          </div>
        </div>`;
    productList.appendChild(productCard);
});

function renderCart() {
    let tableHtml = `
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Valor</th>
          <th>Total</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>`;
    cart.forEach((product, index) => {
        tableHtml += `
        <tr>
          <td>${product.title}</td>
          <td>${product.quantity}</td>
          <td>${product.price}</td>
          <td>${(product.price * product.quantity).toLocaleString()}</td>
          <td>
            <button class="btn btn-danger" onclick=(removeFromCart())>Eliminar</button>
            </td>
        </tr>`});
    tableHtml += `
            </tbody>
            </table>
            `
    cartItems.innerHTML = tableHtml;

    const neto = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    const iva = neto * 0.19;
    let total = neto + iva;
    const despacho = total > 100000 ? total * 0.05 : 0;
    total += despacho;

    cartSumary.innerHTML = `
    <p><strong>Valor neto:</strong>${neto.toLocaleString()}.-</p>
    <p><strong>IVA 19%:</strong>${iva.toLocaleString()}.-</p>
    ${despacho > 0 ? `<p><strong>Despacho:</strong>${despacho.toLocaleString()}.-</p>` : ''}
    <p><strong>Valor Total:</strong>${total.toLocaleString()}.-</p>`
};

function addToCart(index) {
    const checkbox = document.getElementById(`chk-${index}`);
    const qtyInput = document.getElementById(`qty-${index}`);
    const quantity = parseInt(qtyInput.value);

    if (checkbox.checked && quantity > 0) {
        const product = catalogo[index];
        const existingProduct = cart.find(item => item.code === product.code);

        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.push({ ...product, quantity });
        }

        qtyInput.value = '';
        checkbox.checked = false;
        renderCart();
    }
};

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
};