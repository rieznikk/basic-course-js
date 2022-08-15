"use strict";

// function Message(text) {
//     this.text = text;
//     this.encrypted = "";
// }

// Message.prototype.encrypt = function () {
//     let symbolsAsNumbers = [];
//     for (let i = 0; i < this.text.length; i++) {
//         // charCodeAt https://mzl.la/2KExdCr
//         // push https://mzl.la/3oba48D
//         symbolsAsNumbers.push(this.text.charCodeAt(i));
//     }
//     // join https://mzl.la/3sMknDs
//     this.encrypted = symbolsAsNumbers.join(" ");
// };

// Message.prototype.decrypt = function () {
//     // split https://mzl.la/3oaa6O2
//     let encryptedStringAsArray = this.encrypted.split(" ");
//     // Spread оператор https://mzl.la/3p5PDep
//     // console.log(...[10, 3, 89]) <--- посмотрите в консоли пример работы spread оператора
//     // fromCharCode https://mzl.la/3pdsiHH
//     let decryptedString = String.fromCharCode(...encryptedStringAsArray);
//     return decryptedString;
// };

// // let message = new Message("hello world");
// // message.encrypt();
// // console.log(message.encrypted);
// // console.log(message.decrypt());

// function HashMessage(text, hash) {
//     Message.call(this, text);
//     this.hash = hash;
// }

// HashMessage.prototype = Object.create(Message.prototype);
// HashMessage.prototype.constructor = HashMessage;

// HashMessage.prototype.hashEncrypt = function () {
//     // btoa https://mzl.la/3c5VTz8
//     this.encrypted = window.btoa(this.text + "|" + this.hash);
// };

// HashMessage.prototype.hashDecrypt = function () {
//     // atob https://mzl.la/3c5VTz8
//     let fullDecryptedString = window.atob(this.encrypted);
//     // indexOf https://mzl.la/3c8xCbF
//     let positionOfSeparator = fullDecryptedString.indexOf("|");
//     // slice https://mzl.la/365xoyg
//     return fullDecryptedString.slice(0, positionOfSeparator);
// }

// let hashMessage1 = new HashMessage("lorem ipsum", "adsf!@#_(*+-&ktyusqewad");
// hashMessage1.hashEncrypt();
// console.log(hashMessage1.encrypted);
// console.log(hashMessage1.hashDecrypt());

// hashMessage1.encrypt();
// console.log(hashMessage1.encrypted);
// console.log(hashMessage1.decrypt());


/**
 * ES5
 * @param {string} name 
 * @param {number} price 
 */
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    this.price = this.price - (this.price / 100 * 25);
    return this.price;
}

// let hookah = new Product('hookah', 5000);
// console.log(hookah.make25PercentDiscount());


/**
 * ES6
 * @param {string} name 
 * @param {number} price 
 */
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount = function() {
            this.price = this.price - (this.price / 100 * 25);
            return this.price;
        }
}

// let hookah = new Product('hookah', 5000);
// console.log(hookah.make25PercentDiscount());