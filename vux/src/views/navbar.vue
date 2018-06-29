<!--  -->
<template>
  <div class="app-container">
    <tab bar-position="top">
      <tab-item selected @on-item-click="onItemClick">已发货</tab-item>
      <tab-item @on-item-click="onItemClick">未发货</tab-item>
      <tab-item @on-item-click="onItemClick">全部订单</tab-item>
    </tab>
    <div>
      <tabbar>
      <tabbar-item>
        <img slot="icon" src="../assets/imgs/home_1.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../assets/imgs/search_1.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="../assets/imgs/relase_1.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../assets/imgs/mine_1.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem,
    Tabbar,
    TabbarItem
  },
  data () {
    return {
    }
  },

  methods: {
    onItemClick (index) {
      console.log('on item click:', index)
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
