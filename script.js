const pathToImages = 'img';

const goods = [{
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



const $goodsList = document.querySelector('.products__elments');

const renderGoodsItem = ({
    image,
    title,
    description,
    price
}) => {
    return `
    <div class="products__Item">
        <div class="products__ImgWrap">
            <img src="${pathToImages}/${image}" alt="${title}">
            <div class="products__ImgDark">
                <button data-productsId="${title}">
                    <img src="${pathToImages}/cart.svg" alt="">
                    Add to Cart
                </button>
            </div>
        </div>
        <div class="products__Data">
            <div class="products__Name">
                ${title}
            </div>
            <div class="products__Text">
                ${description}
            </div>
            <div class="products__Price">
                $${price}
            </div>
        </div>
    </div>
    `;

};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
        item => renderGoodsItem(item)
    ).join("");

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList();