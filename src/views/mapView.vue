<template>
  <div class="mapView">
    <h2>千秋华夏，壮丽河山，落日余晖，璀璨星河。</h2>
    <div id="container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import { shallowRef } from '@vue/reactivity'
import AMapLoader from '@amap/amap-jsapi-loader';
export default defineComponent({
  methods: {
      initMap() {
        AMapLoader.load({
          key: "0332d2343c8e61c2a76de1fd74491b6e", //此处填入我们注册账号后获取的Key
          version: "2.0", //指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
          plugins: [''], //需要使用的的插件列表，如比例尺'AMap.Scale'等
        }).then((AMap) => {
          this.map = new AMap.Map("container", { //设置地图容器id
            viewMode: "3D", //是否为3D地图模式
            zoom: 5, //初始化地图级别
            center: [105.602725, 37.076636], //初始化地图中心点位置
          });
        }).catch(e => {
          console.log(e);
        })
      },
    },
    mounted() {
      this.initMap();
    },
  setup() {
    const map = shallowRef(null);
    return {
      map,
    }
  },
});
</script>

<style  scoped>
    #container{
        padding:0px;
        margin: 0px;
        width: 100%;
        height: 800px;
    }
</style>
