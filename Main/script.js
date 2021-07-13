const pathToImages = 'img';
const $goodsList = document.querySelector('.products__elments');
class GoodsItem {
    constructor(image, title, description, price) {
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
                <button data-productsId="${this.title}">
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
    }
    feetchGoods() {
        this.goods = [{
                image: '0.jpg',
                title: 'Shirt',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
                price: 52.22
            },
            {
                image: '1.jpg',
                title: 'Socks',
                description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
                price: 32.12
            },
            {
                image: '2.jpg',
                title: 'Jacket',
                description: 'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
                price: 82.87
            },
            {
                image: '3.jpg',
                title: 'Shoes',
                description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
                price: 22.39
            },
            {
                image: '4.jpg',
                title: 'Blouse',
                description: 'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.',
                price: 92.99
            },
            {
                image: '5.jpg',
                title: 'Underwear',
                description: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
                price: 12.55
            },
        ];
    }
    render() {
        let goodsList = "";
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.image, good.title, good.description, good.price)
            goodsList = goodItem.render();
            $goodsList.insertAdjacentHTML('beforeend', goodsList);
        });

    }
    allsum() {
        let allsum = "";
        this.goods.forEach(good => {
            const sum = good.price;
            allsum = Math.floor(Number(allsum + sum));

        });
        $goodsList.insertAdjacentHTML('beforeend', `<div>Total price</div><div>$${allsum}</div>`);
    }
}
const list = new GoodsList();
list.feetchGoods();
list.render();
list.allsum();


class Basket {
    constructor(title, price, quantity) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }
    render() {
        return `
        <div class="basketRow">
            <div>${this.title}</div>
            <div>
                <span class="productCount" data-productId="${this.title}}">1</span> шт.
            </div>
            <div>$${this.price}</div>
            <div>
                $<span class="productTotalRow" data-productId="${this.title}">${this.price}*${this.quantity}</span>
            </div>
        </div>
    `;
    }

}
class BasketEl extends GoodsList {
    render() {
        let basketEl = "";
        this.goods.forEach(good => {
            const basket = new Basket(good.title, good.price)
            goodsList = basket.render();
            $goodsList.insertAdjacentHTML('beforeend', basketEl);
        });

    }

}

const elem = new BasketEl();
elem.feetchGoods();
elem.render();