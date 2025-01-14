<template>
  <h1>Hello App!</h1>
  <p>
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/test">Go to Test</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>


<script>
  import { RouterView } from 'vue-router';
  export default{
    components :{
      RouterView
    }
  }
</script>
<style scoped>
</style>
