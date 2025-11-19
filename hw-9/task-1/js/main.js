class Button {
    constructor(text, border, color, background) {
        this.text = text;
        this.border = border;
        this.color = color;
        this.background = background;
    }

    render() {
        // створити елемент
        let btn = document.createElement("button");

        // задати стилі
        btn.innerText = this.text;
        btn.style.border = this.border;
        btn.style.color = this.color;
        btn.style.background = this.background;
        btn.style.padding = "10px 20px";
        btn.style.margin = "10px 20px";
        btn.style.cursor = "pointer";

        // додати подію click
        btn.addEventListener("click", () => {
            console.log(`Кнопка ${this.text} натиснута. Колір кнопки - ${this.background}`);
        });

        // додати кнопку на сторінку
        document.body.appendChild(btn);

        // повернути елемент
        return btn;
    }
}

class RoundedButton extends Button {
    constructor(text, border, color, background, borderRadius) {
        super(text, border, color, background);
        this.borderRadius = borderRadius;
    }

    render() {
        const btn = super.render();
        btn.style.borderRadius = this.borderRadius;

        this.dropShadow(btn);

        return btn;
    }

    dropShadow(buttonElement) {
        // робота з mouseenter 
        buttonElement.addEventListener("mouseenter", () => {
            buttonElement.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.6)";
        });
        // робота з mouseleave
        buttonElement.addEventListener("mouseleave", () => {
            buttonElement.style.boxShadow = "none";
        });
    }
}

// створити 3 кнопки Button
let btn1 = new Button("Click me","2px solid blue", "white", "lightblue");
btn1.render();
let btn2 = new Button("Press here","3px solid orange", "white", "lightsalmon");
btn2.render();
let btn3 = new Button("Click here","2px solid green", "white", "lightgreen");
btn3.render();

// створити 3 кнопки RoundedButton
const rbtn1 = new RoundedButton("Save", "1px solid violet", "white", "purple", "20px");
rbtn1.render();
const rbtn2 = new RoundedButton("Send", "1px solid orange", "orange", "yellow", "15px");
rbtn2.render();
const rbtn3 = new RoundedButton("Buy", "2px solid grey", "white", "green", "25px");
rbtn3.render();