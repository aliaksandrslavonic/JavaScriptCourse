'use strict';
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        console.log(this.price - (this.price * 0.25))
    };
    
}

let product_1 = new Product('Empty box', 20);
product_1.make25PercentDiscount();