


const vue = new Vue({
    el: '#app',
    data() {
        return {
            goods_list: [
                {id: 1, name: 'good1', img: 'img/products/item1.png', desc: 'desc2', price: 10},
                {id: 2,name: 'good2', img: 'img/products/item2.png', desc: 'desc3', price: 20},
                {id: 7, name: 'good3', img: 'img/products/item3.png', desc: 'desc4', price: 30},
                {id: 3, name: 'good4', img: 'img/products/item4.png', desc: 'desc5', price: 40},
                {id: 4, name: 'good5', img: 'img/products/item5.png', desc: 'desc6', price: 50}
            ], 
            cart: []
        }
    },
    methods: {
        addHandler(id) {
            const good = this.goods_list.find(good => good.id === id)
            this.cart.push(good);

            console.log(this.cart)
        }
    }
})