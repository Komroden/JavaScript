'use strict';
const vue = new Vue({
    el: '#app',
    data: {
        goods:[],
        searchLine:'',
        cart:""
    },
    methods:{
        filteredGoods(){
            const regex = new RegExp(this.searchLine,'i');
        this.goods=this.goods.filter((good)=>regex.test(good.product_name));
        },
        isVisibleCart(){
            this.cart = document.querySelector('.cart')
            this.cart.classList.toggle('hidden')
        }
        
        },
    mounted() {
            fetch ('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json')
            .then ((response)=>response.json())
            .then((data)=>this.goods=data)        
    }   
});