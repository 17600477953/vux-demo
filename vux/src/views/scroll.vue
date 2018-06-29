<!--  -->
<template>
  <div class="app-container">
    <div style="height:100%;">
    <view-box ref="viewBox" style="padding-top:46px;">
      <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
      <!-- <router-view></router-view>
      <tabbar slot="bottom"></tabbar> -->
      <p v-for="i in 100" :key="i">{{i}}</p>
    </view-box>
    </div>
  </div>
</template>

<script>
import { ViewBox, XHeader } from 'vux'
export default {
  components: {
    ViewBox, XHeader
  },
  data () {
    return {
    }
  },

  methods: {
    fn () {
      /**
      * ! sadsadsdsd
      * ? hello
      * TODO: reset something
      */
      // !
      // ?
      // TODO: ssss
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
