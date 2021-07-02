'use strict';
const pathToImages = 'img';
const pathToProductsImages = `${pathToImages}/cards`;
const featuredItemsEl = document.querySelector('.products__elments');

function getProductMarkup(product) {
    return `
        <div class="products__Item">

            <div class="products__ImgWrap">
                <img src="${pathToProductsImages}/${product.image}" alt="${product.name}">
                <div class="products__ImgDark">
                    <button data-productId="${product.id}">
                        <img src="${pathToImages}/cart.svg" alt="">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div class="products__Data">
                <div class="products__Name">
                    ${product.name}
                </div>
                <div class="products__Text">
                    ${product.description}
                </div>
                <div class="products__Price">
                    $${product.price}
                </div>
            </div>

        </div>
    `;
}

function insertProductsIntoPage(products, featuredItemsEl) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += getProductMarkup(product);
    }
    featuredItemsEl.insertAdjacentHTML('afterbegin', productsMarkup);
}

function addEventListenersForAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll('button[data-productId]');
    addToCartBtns.forEach(function (button) {
        button.addEventListener('click', addedProductHandler);
    })
}

function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId);
}
insertProductsIntoPage(products, featuredItemsEl);
addEventListenersForAddToCartButtons();