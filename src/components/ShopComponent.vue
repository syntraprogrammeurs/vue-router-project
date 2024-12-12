<template>
  <div class="row">
<!--    hier komen meerdere productcards-->
    <h1>Shop</h1>
      <product-card
          v-for="product in products"
          :key="product.id"
          :name="product.name"
          :price="product.price"
          :image="product.image"
          :color="product.color"
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
      { id: 1, name: 'Laptop', price: 999.99, image: 'https://via.placeholder.com/200', color:'blue' },
      { id: 2, name: 'Telefoon', price: 499.99, image: 'https://via.placeholder.com/200', color:'red'},
      { id: 3, name: 'Desktop', price: 699.99, image: 'https://via.placeholder.com/200', color:'orange', },
    ]);
    const cart = ref([]);

    const handleAddToCart = (product)=>{
      cart.value.push(product)
      console.log(cart);
    }
    return { products, cart,  handleAddToCart}
  }
}
</script>