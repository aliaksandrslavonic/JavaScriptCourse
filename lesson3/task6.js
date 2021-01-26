'use strict';

//вариант 1
console.log("вариант 1"); 

let somestring = "xxxxxxxxxxxxxxxxxxxx" 
for (var i = 20; i >= 0; i--) {
    console.log(somestring.substr(i));    
};

//вариант 2
console.log("вариант 2"); 
let somestring2 = ''
for (var i = 1; i <= 20; i++) {
    somestring2 += 'x'
    console.log(somestring2);    
};




