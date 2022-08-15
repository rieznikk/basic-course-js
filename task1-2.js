'use strict';

/**
 * ES5
 * @param {string} author 
 * @param {string} text 
 * @param {string} date 
 */
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function() {
    this.text = 'Privet Nikita';
    return this.text;
}

/**
 * ES5(extend)
 * @param {string} author 
 * @param {string} text 
 * @param {string} date 
 * @param {boolean} highlighted 
 */
function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date);
    this.highlighted = highlighted;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
    return this.highlighted;
}

// let post1 = new AttachedPost('Oleksandr', 'hello world', '15.08.2022', false);
// console.log(post1.makeTextHighlighted());
// console.log(post1.edit());

/**
 * ES5
 * @param {string} author 
 * @param {string} text 
 * @param {string} date 
 */
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit = function() {
        this.text = 'Privet Nikita';
        return this.text;
    }
}

/**
 * ES6(extend)
 * @param {string} author 
 * @param {string} text 
 * @param {string} date 
 * @param {boolean} highlighted 
 */
class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = highlighted;
    }

    makeTextHighlighted = function() {
            this.highlighted = true;
            return this.highlighted;
        }
}

// let post1 = new AttachedPost('Oleksandr', 'hello world', '15.08.2022', false);
// console.log(post1.makeTextHighlighted());
// console.log(post1.edit());