class BookStorage {
    constructor() {
        this.books = [];
    }

    // Додавання книги
    add(book) {
        const newBook = {
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            ...book
        };
        this.books.push(newBook);
        console.log("Книгу додано:", newBook);
        return newBook;
    }

    // Оновлення книги
    update(id, updatedData) {
        const index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            this.books[index] = {
                ...this.books[index],
                ...updatedData,
                updatedAt: new Date().toISOString()
            };
            return this.books[index];
        }
        return null;
    }

    // Отримати всі книги
    getAll() {
        return this.books;
    }

    // Отримати книгу по ID
    getById(id) {
        return this.books.find(book => book.id === id);
    }

    // Видалити книгу по ID
    delete(id) {
        const index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            const removedBook = this.books.splice(index, 1)[0];
            console.log("Книгу видалено:", removedBook);
            return removedBook;
        }
        return null;
    }
}

// Створюємо екземпляр для використання у модальному вікні або списку книг
export const bookStorage = new BookStorage();
