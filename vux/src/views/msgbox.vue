<!--  -->
<template>
  <div class="app-container">
    <x-button @click.native="alertFn">alert</x-button>
    <x-button @click.native="conFn">confirm</x-button>
    <x-button @click.native="proFn">protomp</x-button>
    <x-button @click.native="show0=true">totast</x-button>
    <x-button @click.native="showToast=!showToast">showToast</x-button>
    <group>
      <x-switch title="Hello World" v-model="show1"></x-switch>
    </group>
    <div>
      <alert v-model="show" title="删除" @on-show="onShow" @on-hide="onHide"> Your Message is sent successfully</alert>
    </div>
    <confirm v-model="show5"
      title="vue 牛逼"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
        <p style="text-align:center;">Are you sure?</p>
      </confirm>
      <confirm v-model="show6"
      show-input
      title="请输入姓名"
      :input-attrs="{type: 'number'}"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
      </confirm>
      <inline-loading></inline-loading>
      <!-- <loading :show="true"></loading> -->
      <br>
      <clocker time="2018-07-01"></clocker>
      <br>
      <clocker time="2018-08-01"></clocker>
      <br>
      <clocker time="2018-09-01"></clocker>
      <toast v-model="show0" type="text" width="20em" :time="800" is-show-mask text="复制成功" position="top"></toast>
      <div v-transfer-dom>
      <x-dialog v-model="showToast" class="dialog-demo">
        <div style="padding:15px;">
          <x-button @click.native="doShowToast" type="primary">show toast</x-button>
          <br>
          <br>
          <br>
          <br>
          <br>
        </div>
        <div @click="showToast=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
    <div>
      <badge text="1"></badge>
      <br>
      <badge text="99+"></badge>
      <br>
      <badge></badge>
    </div>
  </div>
</template>

<script>
import { Badge, XDialog, Toast, Confirm, Alert, Group, XSwitch, Cell, XButton, InlineLoading, Loading, Clocker, TransferDomDirective as TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    Badge,
    XDialog,
    Toast,
    Confirm,
    Alert,
    Group,
    XSwitch,
    Cell,
    XButton,
    InlineLoading,
    Loading,
    Clocker
  },
  data () {
    return {
      show0: false,
      show: false,
      show1: true,
      show5: false,
      show6: false,
      showToast: false
    }
  },

  methods: {
    doShowToast () {
      console.log(1)
    },
    alertFn () {
      debugger
      console.log(1)
      this.show = true
      setTimeout(() => {
        console.log('hahah')
        this.show = false
      }, 2000)
    },
    onShow () {
      console.log(2)
    },
    onHide () {
      console.log(3)
    },
    conFn () {
      this.show5 = true
    },
    proFn () {
      this.show6 = true
    },
    onCancel () {
      console.log('取消')
    },
    onConfirm (msg) {
      console.log(msg)
      console.log('确认')
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
