export class Modal {
    constructor() {
        this.modal = document.getElementById('modal');
        this.btnClose = document.getElementById('btnClose');
        this.btnCancel = document.getElementById('btnCancel');
        this.form = document.getElementById('bookForm');
        this.modalTitle = document.getElementById('modalTitle');
        this.onSubmit = null; // callback для збереження книги

        this.initEventListeners();
        this.initValidation();
    }

    initEventListeners() {
        this.btnClose.addEventListener('click', () => this.close());
        this.btnCancel.addEventListener('click', () => this.close());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.close();
        });
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    initValidation() {
        const fields = this.form.querySelectorAll("input, select, textarea");
        fields.forEach(field => {
            field.addEventListener("input", () => this.validateField(field));
            field.addEventListener("blur", () => this.validateField(field));
        });
    }

    validateField(field) {
        field.setCustomValidity(""); // скидаємо кастомну помилку
        const value = field.value.trim();

        // Кастомна перевірка ціни книги
        if (field.id === "bookPrice") {
            const price = parseFloat(value);
            if (!isNaN(price) && price < 1) {
                field.setCustomValidity("Ціна занадто мала. Мінімум 1 грн.");
            }
        }

        // Кастомна перевірка назви книги
        if (field.id === "bookTitle") {
            if (/^\d/.test(value)) {
                field.setCustomValidity("Назва не може починатися з цифри");
            }
        }

        const errorSpan = field.parentElement.querySelector(".error-message");
        errorSpan.textContent = field.checkValidity() ? "" : this.getErrorMessage(field);

        return field.checkValidity();
    }

    getErrorMessage(field) {
        const validity = field.validity;

        if (validity.valueMissing) return "Це поле обов'язкове";
        if (validity.typeMismatch) {
            if (field.type == "url") return "Введіть коректний URL";
        }
        if (validity.patternMismatch) return field.title || "Формат вводу не відповідає вимогам";
        if (validity.tooShort) return `Мінімальна довжина: ${field.minLength} символів`;
        if (validity.tooLong) return `Максимальна довжина: ${field.maxLength} символів`;
        if (validity.rangeOverflow) return `Максимальне значення: ${field.max}`;
        if (validity.rangeUnderflow) return `Мінімальне значення: ${field.min}`;
        if (validity.customError) return field.validationMessage;

        return "Некоректне значення";
    }

    open(title = "Додати книгу") {
        this.modal.classList.add('active');
        this.modalTitle.textContent = title;
    }

    close() {
        this.modal.classList.remove('active');
        this.form.reset();
        const errorSpans = this.form.querySelectorAll(".error-message");
        errorSpans.forEach(span => span.textContent = "");
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.form.checkValidity()) {
            const fields = this.form.querySelectorAll("input, select, textarea");
            fields.forEach(field => this.validateField(field));
            return;
        }

        const formData = Object.fromEntries(new FormData(this.form));

        if (this.onSubmit) this.onSubmit(formData);

        this.close();
    }
}
