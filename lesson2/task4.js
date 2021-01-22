'use strict';

let a = prompt("Введите первое число");
let b = prompt("Введите второе число");

//Сложение
function addition(a, b) {
    return +a + +b;
}
//Вычитание
function subtraction(a, b) {
    return +a - +b;
}
//Умножение
function multiplication(a, b) {
    return +a * +b;
}
//Деление
function squdivisionare(a, b) {
    return +a / +b;
}


console.log(`Сложение чисел ${a} и ${b} = ` + addition(a, b))
console.log(`Вычитание чисел ${a} и ${b} = ` + subtraction(a, b))
console.log(`Умножение чисел ${a} и ${b} = ` + multiplication(a, b))
console.log(`Деление чисел ${a} и ${b} = ` + squdivisionare(a, b))


