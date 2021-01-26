'use strict';
for (var i = 1; i <= 10; i++) {
    let result = 0;
    result = i % 2;
    if (result == 0) {
        console.log(`${i} - Четное`);
    }
    else{
        console.log(`${i} - Не четное`);
    }
    console.log();
    
 };