<template>
  <div class="home">
    <FixTop/>
    <div class="home-commain">
      <div>哈哈</div> 
      <img src="../assets/1.jpg" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import FixTop from '../components/fix-top.vue';
export default defineComponent({
  components:{FixTop},
})
</script>
<style lang="scss" scoped>
.home{
  height: 10000px;
  &-commain{
    width: 100%;
    img{
      width: 100%;

    }
    padding-top: 80px;
  }
}
</style>
