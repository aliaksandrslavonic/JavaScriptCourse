'use strict';

const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];

function discount(price, percent) {
    return price - (price * percent);
}

products.forEach((element) => {
    element.price = discount(element.price, 0.15)
})

products.forEach((element) => {
    console.log(element.price)
})