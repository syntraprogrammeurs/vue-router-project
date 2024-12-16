<template>
  <div class="container mt-4">
    <button @click="sendMessage" class="btn btn-success">
      Stuur bericht
    </button>
  </div>
</template>
<script>
import { eventBus } from '../utils/eventBus.js';
export default{

  setup(){
    const sendMessage= ()=>{
      eventBus.setMessage('Hallo van sender');
    }
    return {sendMessage}
  }
}
</script>