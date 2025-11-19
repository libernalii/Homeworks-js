import { Modal } from "./modal.js";
import { bookStorage } from "./storage.js";

function app() {
    const modal = new Modal();
    const container = document.querySelector(".product-container");

    // Додавання книги
    modal.onSubmit = (bookData) => {
        bookStorage.add(bookData);
        renderBooks();
    }

    // Відкрити модалку
    document.getElementById("btnCreate").addEventListener("click", () => modal.open());

    function renderBooks() {
        const books = bookStorage.getAll();
        if (books.length === 0) {
            container.innerHTML = `<p style="text-align:center; color:#7f8c8d; margin-top:50px;">
                Тут будуть відображатися книги...
            </p>`;
            return;
        }

        container.innerHTML = books.map(book => `
            <div class="book-card" style="border:1px solid #ddd; padding:15px; margin-bottom:15px; border-radius:8px;">
                <img src="${book.photo}" alt="${book.title}" style="width:80px; height:120px; object-fit:cover; float:left; margin-right:15px; border-radius:4px;">
                <h3 style="margin:0;">${book.title}</h3>
                <p style="margin:4px 0 0; font-size:14px; color:#555;">Автор: ${book.author}</p>
                <p style="margin:4px 0 0; font-size:14px; color:#555;">Жанр: ${book.genre}</p>
                <p style="margin:4px 0 0; font-size:14px; color:#555;">Ціна: ${book.price} грн | Кількість: ${book.qty}</p>
                <p style="clear:both; margin-top:8px; font-size:13px; color:#777;">${book.description}</p>
            </div>
        `).join('');
    }

    renderBooks();
}

document.addEventListener("DOMContentLoaded", app);
