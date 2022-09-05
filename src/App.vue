<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default{
  components:{
  }
}
</script>
<style lang="scss">
  *{
    padding: 0;
    margin: 0;
  }
.main{
  width: 100%;
  height: 100%;

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
