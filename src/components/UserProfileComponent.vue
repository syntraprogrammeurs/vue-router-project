<template>
  <div>
    <h1>User profile</h1>
    <p>Wie ben ik? Ik ben: {{route.params.id}}</p>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: 'UserProfileComponent',
  setup(){
    const route = useRoute();
    return { route }
  }
};
</script>