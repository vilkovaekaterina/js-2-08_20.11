import catalogItem from './CatalogItem'
let catalog = {
    data() {
        return {
            items: [],
            imgCatalog: 'https://placehold.it/200x150'
        }
    },

    methods: {
        addProduct(product) {
            console.log(product.product_name)
        }
    },
    mounted() {
        this.$parent.getJSON('/catalog')
            .then(data => this.items = data)
    },
    template: `
    <div class="products">
        <catalog-item v-for="product of items" :img="imgCatalog" :el="product" :key="product.id_product"/>
    </div>
    `,
    components: {
        'catalog-item': catalogItem
    }
}

export default catalog