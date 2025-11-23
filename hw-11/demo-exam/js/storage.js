class BookStorage {
    constructor() {
        this.storageKey = "books";
        this.books = this.loadFromLocal() || [];
    }

    // --- Завантаження з LocalStorage ---
    loadFromLocal() {
        return JSON.parse(localStorage.getItem(this.storageKey));
    }

    // --- Збереження в LocalStorage ---
    saveToLocal() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.books));
    }

    // --- Додавання книги ---
    add(book) {
        const newBook = {
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            ...book
        };

        this.books.push(newBook);
        this.saveToLocal(); // ⬅ ОБОВʼЯЗКОВО!

        console.log("Книгу додано:", newBook);
        return newBook;
    }

    // --- Оновлення книги ---
    update(id, updatedData) {
        const index = this.books.findIndex(book => book.id === id);

        if (index !== -1) {
            this.books[index] = {
                ...this.books[index],
                ...updatedData,
                updatedAt: new Date().toISOString()
            };

            this.saveToLocal(); // ⬅ Зберегти зміни

            return this.books[index];
        }

        return null;
    }

    // --- Видалення книги ---
    delete(id) {
        const index = this.books.findIndex(book => book.id === id);

        if (index !== -1) {
            const removed = this.books.splice(index, 1)[0];
            this.saveToLocal(); // ⬅ Зберегти після видалення
            console.log("Книгу видалено:", removed);
            return removed;
        }

        return null;
    }

    // --- Геттер для всіх книг ---
    getAll() {
        return this.books;
    }

    // --- Геттер по ID ---
    getById(id) {
        return this.books.find(book => book.id === id);
    }
}

export const bookStorage = new BookStorage();
