<template>
  <div class="row">
<!--    hier komen meerdere productcards-->
    <h1>Shop</h1>
    product in products
    <product-card
      v-for="product in products"
      :key="product.id"
      :name="product.name"
      :price="product.price"
      :image="product.image"
      @addToCart="handleAddToCart"
    />
  </div>
</template>
<script>
import ProductCard from "@/components/ProductCard.vue";
import { ref } from "vue";

export default{
  name:'ShopComponent',
  components: {ProductCard},
  setup(){
    const products = ref([
      { id: 1, name: 'Laptop', price: 999.99, image: 'https://via.placeholder.com/200' },
      { id: 2, name: 'Telefoon', price: 499.99, image: 'https://via.placeholder.com/200' },
    ]);
    const cart = ref([]);

    const handleAddToCart = (product)=>{
      cart.value.push(product)
    }
    return { products, cart,  handleAddToCart}
  }
}
</script>