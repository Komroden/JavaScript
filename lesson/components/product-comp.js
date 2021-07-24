const productTemp = `<div class="container product-container">
<h4 class="product-heading">Fetured Items</h4>
<p class="product-text">Shop for items based on what we featured in this week</p>
<div class="product">    
       
<item-comp v-for="good of goods" v-bind:good="good" v-on:add="addHandler"></item-comp>

</div>
<a href="catalog.html" class="browse-button">Browse All Product</a>
</div>`

Vue.component('product-comp', {
    template: productTemp,
    props: ['goods'],
    methods: {
        addHandler(id) {
            this.$emit('add', id)
        }
    }
})