let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "./assets/vmSocks-green-onWhite.jpg",
        altText: "A pair of socks",
        inStock: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
            }
        ],

        cart: 0,
        cartValue:0,
    },
    methods: {
        addOneToCart(){
            this.cartValue +=1
        },
        minusOneToCart(){
            this.cartValue -=1
        },
        addToCart() {
            this.cart += this.cartValue
        },
        updateProduct(variantImage) {
            this.image = variantImage
        },

    }
})
