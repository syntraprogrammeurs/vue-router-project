<template>
  <div class="col-lg-4">
    <div class="card">
      <img src="https://via.placeholder.com/200" alt="product afbeelding" class="card-img-top">
      <div class="card-body">
        <div class="card-title">
          <h3>{{ name }}</h3>
          <p class="card-text">{{ price }}</p>
          <p>{{ color }}</p>
          <button @click="addToCart" class="btn btn-primary">
            <i class="bi bi-plus"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {computed} from "vue";

  export default{
    props:{
      name:{
        type:String,
        required:true,
      },
      price:{
        type:Number,
        required:true,
      },
      image:{
        type:String,
        required:true,
      },
      color:{
        type:String,
        required:true,
      }
    },
    emits:['addToCart'],
    setup(props,{emit}){
      const formattedPrice = computed(()=> `€${props.price.toFixed(2)}`);
      const addToCart = ()=>{
        emit('addToCart', { name: props.name, price: props.price})
      }
      return { formattedPrice, addToCart}
    }
  }
</script>