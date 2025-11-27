function randomTime() {
    return Math.floor(Math.random() * 3000) + 1000; 
}

function loadImages() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Завантажено картинки"), randomTime());
    });
}

function loadProducts() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Завантажено продукти"), randomTime());
    });
}

function loadUsers() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Завантажено користувачів"), randomTime());
    });
}

loadImages()
    .then(result => {
        console.log(result);
        return loadProducts();
    })
    .then(result => {
        console.log(result);
        return loadUsers();
    })
    .then(result => console.log(result));
    
Promise.all([loadImages(), loadProducts(), loadUsers()])
    .then(results => console.log(results));
