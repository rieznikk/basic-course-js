'use strict'

function checkingNumbers(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        alert(`Значение должно быть от 0 до 999. Спасибо, увидимся.`)
        return {};
    }
    return {
        units: num % 10,
        hundreds: Math.floor(num / 100),
        tens: Math.floor(num / 10) % 10,
    }
    
}

let answer = parseInt(prompt('Введите число от 0 до 999'));
console.log(checkingNumbers(answer));