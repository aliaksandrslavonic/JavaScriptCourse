'use strict';

let a = -10
let b = 4

if(a >= 0 && b >= 0){
    if (a > b){
        console.log(a - b)
    }
    else{
        console.log(b - a)
    }
}
else if(a < 0 && b < 0 ){
    console.log(a * b)
}
else{
    console.log(a + b)
}

