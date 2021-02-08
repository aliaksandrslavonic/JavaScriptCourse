'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    console.log(this.price - (this.price * 0.25))
};

let product_1 = new Product('Empty box', 10);
product_1.make25PercentDiscount();