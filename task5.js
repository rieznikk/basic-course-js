'use strict';

/**
 * Функция складывания.
 * @param {number} plusA - Первое число. 
 * @param {number} plusB - Второе число.
 * @returns {number}
 */
function plus (plusA, plusB) {
    let c = (plusA + plusB);
    return (c);
}
plus(10, 5);

/**
 * Функция отнимания.
 * @param {number} minusA - Первое число. 
 * @param {number} minusB - Второе число.
 * @returns {number}
 */
function minus (minusA, minusB) {
    let c = (minusA - minusB);
    return (c);
}
minus(15, 20);

/**
 * Функция умножения.
 * @param {number} multiplyA - Первое число. 
 * @param {number} multiplyB - Второе число.
 * @returns {number}
 */
function multiply (multiplyA, multiplyB) {
    let c = (multiplyA * multiplyB);
    return (c);
}
multiply(50, 21);

/**
 * Функция деления.
 * @param {number} divideA - Первое число. 
 * @param {number} divideB - Второе число.
 * @returns {number}
 */
function divide (divideA, divideB) {
    let c = (divideA / divideB);
    return (c);
}
divide(5, 0);

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "+":
            return plus(arg1, arg2);
        case "-":
            return minus(arg1, arg2);
        case "*":
            return multiply(arg1, arg2);
        case "/":
            return divide(arg1, arg2);
    }
}

console.log (mathOperation(10, 5, "+"));
console.log (mathOperation(15, 20, "-"));
console.log (mathOperation(50, 21, "*"));
console.log (mathOperation(5, 0, "/"));