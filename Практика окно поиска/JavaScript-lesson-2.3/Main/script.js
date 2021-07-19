const pathToImages = 'img';
const $goodsList = document.querySelector('.products__elments');
const openBasketBtn = document.querySelector('.header__carticonwrap');
const basketEl = document.querySelector('.header__basket');
const elementIntoBasket = document.querySelector('.products__ImgDark');
const basketTotalEl = document.querySelector('.header__baskettotal');
let searchIcon = document.querySelector('.header__search');
let searchInput = document.querySelector('.header__searchinput');
let searchButton = document.querySelector('.header__searchbutton');
openBasketBtn.addEventListener('click', function () {
    basketEl.classList.toggle('hidden');
});
class GoodsItem {
    constructor({
        id,
        image,
        title,
        description,
        price
    }) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.description = description;
        this.price = price;
    }
    render() {
        return `
    <div class="products__Item">
        <div class="products__ImgWrap">
            <img src="${pathToImages}/${this.image}" alt="${this.title}">
            <div class="products__ImgDark">
                <button data-productsId="${this.id}">
                    <img src="${pathToImages}/cart.svg" alt="">
                    Add to Cart
                </button>
            </div>
        </div>
        <div class="products__Data">
            <div class="products__Name">
                ${this.title}
            </div>
            <div class="products__Text">
                ${this.description}
            </div>
            <div class="products__Price">
                $${this.price}
            </div>
        </div>
    </div>
    `;
    };

}
class GoodsList {
    constructor() {
        this.goods = [];
        this.filtredgoods=[];
    }
    add(good) {
        this.goods.push(good);
        this.filtredgoods.push(good);
    }
    filter(queryString){
        const regex = new RegExp(queryString,'i');
        this.filtredgoods=this.goods.filter((good)=>regex.test(good.title));
        this.render();
    }
    render() {
        $goodsList.textContent="";
        let goodsList = "";
        this.filtredgoods.forEach(good => {
            const goodItem = new GoodsItem(good)
            goodsList = goodItem.render();
            $goodsList.insertAdjacentHTML('beforeend', goodsList);
        });

    }
};
const list = new GoodsList()


fetch('https://raw.githubusercontent.com/Komroden/Json/main/catalog.json')
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        response.forEach(newGood => {
            list.add(newGood);
        });
        list.render();
    })
    .catch((err) => {
        console.log(err);
    })

class Basket {
    constructor(id) {
        this.id = id;
    }
    renderNewProductInBasket(title, price, quantity) {
        let productRow = `
            <div class="basketRow">
                <div>${title}</div>
                <div>
                    <span class="productCount">${quantity}</span> шт.
                </div>
                <div>$${price}</div>
                <div>
                    $<span class="productTotalRow"</span>
                    ${(price*quantity).toFixed(2)}
                </div>
            </div>
        `;
        basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
    }
}

const item1 = new Basket(0)
item1.renderNewProductInBasket('Shirt', 52.22, 3);
const item2 = new Basket(1)
item1.renderNewProductInBasket('Socks', 32.12, 3);

searchIcon.addEventListener('click', function () {
    searchInput.classList.toggle('hidden');
    searchButton.classList.toggle('hidden');
}); 

searchButton.addEventListener('click', () => {
    list.filter(searchInput.value)
})