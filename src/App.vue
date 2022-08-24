<template>
  <div class="main">
    <LuckView/>
  </div>
</template>

<script lang="ts">
import LuckView from './views/luckView.vue'
export default{
  components:{
    LuckView,
  }
}
</script>
<style lang="scss">
.main{
  width: 100%;
  display: flex;
  justify-content: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
