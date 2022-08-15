"use strict";


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