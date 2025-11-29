// === Task 1 === //
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            console.log(user.name);
        });
    })
    .catch(error => console.error("Помилка:", error));

// === Task 2 === //
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
        const list = document.getElementById("postsList");

        posts.forEach(post => {
            const li = document.createElement("li");
            li.textContent = post.title;
            list.appendChild(li);
        });
    })
    .catch(error => console.error("Помилка:", error));

// === Task 3 === //
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "My first post",
        body: "Hello world!",
        userId: 1
    })
})
    .then(response => response.json())
    .then(data => console.log("Відповідь сервера:", data))
    .catch(error => console.error("Помилка:", error));

// === Task 4 === //
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        const container = document.getElementById("products");

        products.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("product-card");

            card.innerHTML = `
                <img src="${product.image}" width="150">
                <h3>${product.title}</h3>
                <p><strong>${product.price}$</strong></p>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => console.error("Помилка:", error));
