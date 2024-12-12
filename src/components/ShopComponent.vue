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
    const randomImageUrl = `https://picsum.photos/200`;
    const products = ref([
      { id: 1, name: 'Laptop', price: 999.99, image: randomImageUrl, color:'blue' },
      { id: 2, name: 'Telefoon', price: 499.99, image: randomImageUrl, color:'red'},
      { id: 3, name: 'Desktop', price: 699.99, image: randomImageUrl, color:'orange', },
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