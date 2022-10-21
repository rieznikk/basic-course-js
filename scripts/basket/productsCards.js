'use strict';

const pathToImages = 'images';
const pathToProductsImages = `${pathToImages}/featured`;
const featuredItemsEl = document.querySelector('.featuredItems');

function getProductMarkup(product) {
    return `
        <div class="featuredItem">

            <div class="featuredImgWrap">
                <img src="${pathToProductsImages}/${product.image}" alt="${product.name}">
                <div class="featuredImgDark">
                    <button data-productId="${product.id}">
                        <img src="${pathToImages}/cart.svg" alt="">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div class="featuredData">
                <div class="featuredName">
                    ${product.name}
                </div>
                <div class="featuredText">
                    ${product.description}
                </div>
                <div class="featuredPrice">
                    $${product.price}
                </div>
            </div>

        </div>
    `;
}

function addEventListenerForAddToCardButtons () {
    const addToCartButtons = document.querySelectorAll('button[data-productId]');
    addToCartButtons.forEach(function (button){
        button.addEventListener('click', addedProductHandler);
    });
}

function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId);
}

function insertProductIntoPage (products, featuredItemsEl) {
    let productsMarkup = '';
    for(let product of products) {
        productsMarkup += getProductMarkup(product);
    }
    featuredItemsEl.insertAdjacentHTML('afterbegin', productsMarkup);
};

insertProductIntoPage(products, featuredItemsEl);
addEventListenerForAddToCardButtons();