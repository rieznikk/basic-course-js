'use strict';

let a = -100;
let b = 50;
let c;

if (a >= 0 && b >= 0 ){
    c = a - b;
    console.log(c);
} else if (0 > a && 0 > b) {
    c = a * b;
    console.log(c);
} else {
    c = a + b;
    console.log(c);
}