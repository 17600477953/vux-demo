<!--  -->
<template>
  <div class="app-container">
    <divider>我是分割线</divider>
    <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox>
    <br>
    <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
      <flexbox-item><div class="flex-demo">4</div></flexbox-item>
      <flexbox-item><div class="flex-demo">5</div></flexbox-item>
      <flexbox-item><div class="flex-demo">6</div></flexbox-item>
    </flexbox>
    <br>
    <flexbox :gutter="0">
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
      <flexbox-item><div class="flex-demo">4</div></flexbox-item>
    </flexbox>
    <br>
    <flexbox orient="vertical">
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox>
    <br>
    <flexbox>
      <flexbox-item :span="4"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2/3</div></flexbox-item>
    </flexbox>
    <br>
    <flexbox>
      <flexbox-item :span="6"><div class="flex-demo">6/12</div></flexbox-item>
      <flexbox-item :span="2"><div class="flex-demo">2/12</div></flexbox-item>
      <!-- <flexbox-item ><div class="flex-demo">rest</div></flexbox-item> -->
    </flexbox>
    <br>
    <flexbox>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/6"><div class="flex-demo">1/6</div></flexbox-item>
      <flexbox-item :span="1/8"><div class="flex-demo">1/8</div></flexbox-item>
      <flexbox-item :span="1/8"><div class="flex-demo">1/8</div></flexbox-item>
      <flexbox-item><div class="flex-demo">rest</div></flexbox-item>
    </flexbox>
    <br>
    <flexbox :gutter="0" wrap="wrap">
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
    </flexbox>
    <br>
    <group-title>2 columns</group-title>
    <grid>
      <grid-item label="九宫格" v-for="i in 2" :key="i">
        <img slot="icon" src="../assets/imgs/home_1.png">
      </grid-item>
    </grid>
    <group-title>3 columns</group-title>
    <grid :show-lr-borders="false" :show-vertical-dividers="true">
      <grid-item link="/basic" label="basic">
        <img slot="icon" src="../assets/imgs/home_1.png">
      </grid-item>
      <grid-item link="/basic" label="basic">
        <img slot="icon" src="../assets/imgs/home_1.png">
      </grid-item>
      <grid-item link="/basic" label="basic">
        <img slot="icon" src="../assets/imgs/home_1.png">
      </grid-item>
      <grid-item link="/basic" label="basic">
        <img slot="icon" src="../assets/imgs/home_1.png">
      </grid-item>
      <grid-item link="/basic" label="basic">
        <img slot="icon" src="../assets/imgs/home_1.png">
      </grid-item>
    </grid>
    <div class="space-btn" @click="spaceChange">显示间隔</div>
    <div class="space" v-if="showSpace">间隔</div>
    <div style="height:44px;">
      <sticky
        scroll-box="vux_view_box_body"
        ref="sticky"
        :offset="46"
        :check-sticky-support="false"
        :disabled="disabled">
        <tab :line-width="1">
          <tab-item selected>正在正映</tab-item>
          <tab-item>即将上映</tab-item>
        </tab>
      </sticky>
    </div>
    <p v-for="i in 100" :key="i">{{i}}<br></p>
  </div>
</template>

<script>
import { Divider, Flexbox, FlexboxItem, Grid, GridItem, GroupTitle, Tab, TabItem, Sticky } from 'vux'
export default {
  components: { Divider, Flexbox, FlexboxItem, Grid, GridItem, GroupTitle, Tab, TabItem, Sticky },
  data () {
    return {
      showSpace: false,
      disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent)
    }
  },
  created () {
    console.log(this.$route.query)
  },
  methods: {
    spaceChange () {
      this.showSpace = !this.showSpace
      this.$nextTick(() => {
        this.$refs.sticky.bindSticky()
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.flex-demo {
  text-align: center;
  color: #fff;
  line-height: 2rem;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.weui-grids {
  background-color: #fff;
}
</style>
