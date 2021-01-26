'use strict';

   
const products = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg",]
    }, 
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"]
    },
    {
        id: 8,
        price: 78,
    }
];


function sort_by_price(arr) {
    arr.sort((a, b) => a.price > b.price ? 1 : -1);
  }

sort_by_price(products);

products.forEach((element) => {
    if (element.photos && element.photos.length != 0){
        console.log(element)
    }
   
})
