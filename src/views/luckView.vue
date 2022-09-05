<template>
  <div class="LuckView">
    <h2>今天吃什么</h2>
    <h3>你还有 {{chance}} 次机会</h3>
    <h2>答案：{{answer}}</h2>
    <ul class="content">
      <li class="box">汉堡</li>
      <li class="box">烧烤</li>
      <li class="box">大米饭</li>
      <li class="box">面条</li>
      <li class="point" :class="clickStatus? '' :'clickStatus'" @click="play">Go</li>
      <li class="box">喝粥</li>
      <li class="box">烤冷面</li>
      <li class="box">炒饭</li>
      <li class="box">不吃减肥</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { ElMessage } from "element-plus";
export default defineComponent({
  // components:{
  //   Message,
  // },
  setup() {
    let arr = [0, 1, 2, 4, 7, 6, 5, 3];
    let answer = ref<string>('');
    let chance = ref<number>(2);
    let clickStatus = ref<boolean>(true)
    let index = 0;
    const play = () => {
      if( !clickStatus.value){
        return
      }
      if( chance.value == 0 ){
        ElMessage('没有机会了,你别吃了,吃饭不积极，思想有问题');
        return
      }
      clickStatus.value = false
      chance.value--
      let boxs = document.getElementsByClassName("box");
      
      // 创建循环
      const time = setInterval(() => {
        boxs[arr[index]].className = "box";
        index++;
        if (index >= 8) {
          index = 0;
        }
        boxs[arr[index]].className = "box show";
      }, 100);

      setTimeout(() => {
        clearInterval(time);
        clickStatus.value = true
        let show = document.getElementsByClassName("show")[0] as HTMLElement
        answer.value = show.innerText
      }, Math.round(Math.random() * 3000) + 1000);

    };
    return {
      clickStatus,
      chance,
      play,
      answer,
    };
  },
});
</script>
<style lang="scss" scoped>
.LuckView {
  margin-top: 100px;
}
.content {
  width: 600px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 33%;
    height: 33%;
    border: 1px solid #adb5bd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  }
  .point {
    // width: 33%;
    // height: 33%;
    // border: 1px solid #60a3bc;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    background-color: #fcc2d7;
    font-size: 45px;
    color: #ffffff;
    cursor: pointer;
  }
  .show {
    background-color: #faa2c1;
  }
  .clickStatus{
     background-color: #ffdeeb
  }
}
</style>
