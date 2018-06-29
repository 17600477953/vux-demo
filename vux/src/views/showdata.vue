<!--  -->
<template>
  <div class="app-container">
    sadsadsdsd
    <card :header="str" :footer="foot">
      <div slot="content">
        <br>
        <br>
        <br>
        <p class="center">我是内容</p>
        <br>
        <br>
        <br>
      </div>
    </card>
    <div>
      <countup :start-val="1" :end-val="1388" :duration="2" class="demo1"></countup>
    </div>
    <div>
      <flow>
      <flow-state state="1" title="已付款" is-done></flow-state>
      <flow-line is-done :line-span="15"></flow-line>

      <flow-state state="2" is-done>
        <span slot="title">已发货</span>
      </flow-state>
      <flow-line tip="进行中" :line-span="30"></flow-line>

      <flow-state state="3" title="待收货"></flow-state>
      <flow-line></flow-line>

      <flow-state state="4" title="完成"></flow-state>
    </flow>
    <flow orientation="vertical" style="height:100px;">
      <flow-state state="1" title="已付款" is-done></flow-state>
      <flow-line is-done :line-span="15"></flow-line>

      <flow-state state="2" is-done>
        <span slot="title">已发货</span>
      </flow-state>
      <flow-line tip="进行中" :line-span="30"></flow-line>

      <flow-state state="3" title="待收货"></flow-state>
      <flow-line></flow-line>

      <flow-state state="4" title="完成"></flow-state>
    </flow>
    </div>
      <marquee :interval="2000" direction="down" :item-height="40">
        <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)" class="center">hello world {{i}}</marquee-item>
      </marquee>
      <div>
        <step v-model="step1" background-color='#fbf9fe'>
        <step-item title="步骤1" description="step 1"></step-item>
        <step-item title="步骤2" description="step 2"></step-item>
        <step-item title="步骤3" description="step 3"></step-item>
      </step>
      <x-button type="primary" @click.native="nextStep">下一步</x-button>
      </div>
      <div class="swiper">
        <swiper :loop="true" :aspect-ratio="300/800" @on-index-change="onSwiperItemIndexChange" v-model="swiperItemIndex">
          <swiper-item class="swiper-demo-img" v-for="(item, index) in img_list" :key="index">
            <img :src="item.url">
          </swiper-item>
        </swiper>
      </div>
      <div>
        <x-progress :percent="percent1"></x-progress>
      </div>
      <div>
        <x-table :full-bordered="true">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>$1.25</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
          </tr>
        </tbody>
      </x-table>
      </div>
  </div>
</template>

<script>
import { XTable, XProgress, Swiper, SwiperItem, Step, StepItem, XButton, Card, Countup, Flow, FlowState, FlowLine, Cell, Marquee, MarqueeItem } from 'vux'
export default {
  components: {
    XTable, XProgress, Swiper, SwiperItem, Step, StepItem, XButton, Card, Countup, Flow, FlowState, FlowLine, Cell, Marquee, MarqueeItem
  },
  data () {
    return {
      percent1: 1,
      str: {
        title: '我是头部'
      },
      foot: {
        title: '我是脚部',
        link: '/'
      },
      step1: 0,
      step2: 0,
      swiperItemIndex: 0,
      img_list: [
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530167821918&di=5ff1ff5eb6bed13229e9114a0a1f4249&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2Fb812c8fcc3cec3fd0ea65de5dc88d43f86942782.jpg'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530167822370&di=8b1498e5ae6ff81e06d60b3000e7ff37&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F9vo3dSag_xI4khGko9WTAnF6hhy%2Flvpics%2Fh%3D800%2Fsign%3Dddfdabb61cd8bc3ed9080bcab28aa6c8%2F0824ab18972bd4078486cd717e899e510eb309fc.jpg'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530167822366&di=024ef846cb404e3a94dfc75a952f744b&imgtype=0&src=http%3A%2F%2Fwww.forestry.gov.cn%2Fuploadfile%2Fhistory%2Fimg_lssy20070808291.jpg'
        }
      ]
    }
  },
  created () {
    let self = this
    let timer = setInterval(function () {
      if (self.percent1 >= 100) {
        clearInterval(timer)
      }
      self.percent1++
    }, 500)
  },
  methods: {
    onClick (param) {
      console.log(param)
    },
    nextStep () {
      this.step1++
    },
    onSwiperItemIndexChange (params) {
      console.log(params)
    }
  }
}
</script>
<style lang='scss' scoped>
.demo1 {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  font-size: 6em;
  color: #04BE02;
}
.swiper{
  width: 100%;
  height: 200px;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
