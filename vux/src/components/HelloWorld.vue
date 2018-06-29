<template>
  <div class="hello">
    <toast v-model="show1">弹出框</toast>
    <loading :show="show" :text="text1"></loading>
<alert v-model="show" :title="'你吃饭了吗？'"> {{ '还没啊~' }}</alert>
  </div>
</template>

<script>
import { Loading, Alert, Toast } from 'vux'
export default {
  name: 'HelloWorld',
  components: {Loading, Alert, Toast},
  data () {
    return {
      show1: true,
      text1: 'helloworld',
      show: false,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
