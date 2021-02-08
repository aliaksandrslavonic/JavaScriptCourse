'use strict';

let arg1 = prompt("Введите первое число");
let arg2 = prompt("Введите второе число");
let operation = prompt("Введите операцию одну из 4х математических операций (_+_-_*_/_)");


function mathOperation(a, b, operation){
    switch (operation) {
        case '+':
            return +a + +b;      
        case '-':
            return +a - +b;        
        case '*':
            return +a * +b;
        case '/':
            return +a / +b;
        default:
            break;
      };

};

if (operation == '+' || operation == '-' || operation == '*' || operation == '/') {
    console.log(`Результат операции ${operation} чисел ${arg1} и ${arg2} = ${mathOperation(arg1, arg2, operation)}`);
} 
else{
    console.log(`Не могу распознать операцию ${operation}`);
}

