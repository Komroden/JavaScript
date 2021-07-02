'use strict';

/**
 * Этот класс будет хранить в себе информацию о каком-то конкретном товаре.
 * @see https://ru.wikipedia.org/wiki/DTO
 */
class ProductDTO {
    /**
     * @param {number} id уникальный идентификатор каждого товара
     * @param {string} image название файла с картинкой, например 0.jpg
     * @param {string} name имя товара
     * @param {string} description описание товара
     * @param {number} price цена товара
     */
    constructor(id, image, name, description, price) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
const products = [
    new ProductDTO(
        0,
        '0.jpg',
        'Product 0',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        52.22,
    ),
    new ProductDTO(
        1,
        '1.jpg',
        'Product 1',
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
        32.12,
    ),
    new ProductDTO(
        2,
        '2.jpg',
        'Product 2',
        'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
        82.87,
    ),
    new ProductDTO(
        3,
        '3.jpg',
        'Product 3',
        'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
        22.39,
    ),
    new ProductDTO(
        4,
        '4.jpg',
        'Product 4',
        'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.',
        92.99,
    ),
    new ProductDTO(
        5,
        '5.jpg',
        'Product 5',
        'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
        12.55,
    ),
];