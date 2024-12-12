<template>
  <div class="col-lg-4">
    <div class="card">
      <img :src="image" alt="product afbeelding" class="card-img-top">
      <div class="card-body">
        <div class="card-title">
          <h3>{{ name }}</h3>
          <p class="card-text">{{ price }}</p>
          <span style="display: inline-block; width: 20px; height: 20px; margin-right: 8px; border: 1px solid #000;"
                :style="{ backgroundColor: color }"></span>
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