let allProducts = [];

async function loadProducts() {
    const res = await fetch("https://dummyjson.com/products?limit=100&skip=0");
    const data = await res.json();
    allProducts = data.products;
    renderProducts(allProducts);
}

loadProducts();

function renderProducts(list) {
    const container = document.getElementById("products");
    container.innerHTML = "";

    list.forEach(p => {
        container.innerHTML += `
          <div class="card">
            <img src="${p.thumbnail}" alt="${p.title}">
            <div class="title">${p.title}</div>
            <div>${p.description}</div>
            <div><b>Ціна:</b> $${p.price}</div>
          </div>
        `;
    });
}

document.getElementById("search").addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    const filtered = allProducts.filter(p =>
        p.title.toLowerCase().includes(value) ||
        p.description.toLowerCase().includes(value)
    );

    renderProducts(filtered);
});
