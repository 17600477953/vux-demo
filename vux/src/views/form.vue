<!--  -->
<template>
  <div class="app-container">
    <group>
      <calendar :readonly="readonly" v-model="demo1" :title="str"
      disable-past placeholder="请选择日期" @on-show="log('show')"
       @on-hide="log('hide')" @on-change="onChange" show-popup-header
        popup-header-title="请选择"></calendar>
    </group>
    <p>{{demo1}}</p>
    <x-button>hahahahha</x-button>
    <loading :show="show1" :text="text1"></loading>
    <div>
      <check-icon :value.sync="demo3"> 确认 ({{ demo3 }})</check-icon>
      <br>
      <br>
      <check-icon :value.sync="demo4" type="plain"> 确认 ({{ demo4 }})</check-icon>
    </div>
    <div>
      <checker v-model="demo7" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
      <checker-item value="1">潘</checker-item>
      <checker-item value="2">闲</checker-item>
      <checker-item value="3">邓</checker-item>
      <checker-item value="4">小</checker-item>
      <checker-item value="5">驴</checker-item>
      </checker>
      <br>
      <p>{{demo7}}</p>
    </div>
    <div>
      <datetime-range
      title="请选择"
      start-date="2017-01-01"
      end-date="2017-02-02"
      format="YYYY/MM/DD"
      v-model="value"
      @on-change="onChange">
      </datetime-range>
    </div>
    <div>
      <x-input title="上报人"></x-input>
      <x-input title="上报人haha"></x-input>
      <x-input title="上报人啊啊啊"></x-input>
    </div>
    <div>
      <inline-x-number width="50px" :min="1" :max="3" v-model="num"></inline-x-number>
      <br>
      <p>{{num}}</p>
      <br>
      <inline-x-number width="50px" button-style="round"></inline-x-number>
    </div>
    <div>
      <x-switch title="switch"></x-switch>
    </div>
    <div>
      <input type="file" accept="image/*" capture="camera">
      <input type="file" accept="video/*" capture="camcorder">
      <input type="file" accept="audio/*" capture="microphone">
    </div>
    <div>
      <rater v-model="data3" active-color="#04BE02"></rater>
    </div>
    <div>
      <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value2"
      position="absolute"
      auto-scroll-to-top
      top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      @on-clear="fn"
      ref="search"></search>
    </div>
    <div>
      <!-- <selector ref="defaultValueRef" title="省份" direction="rtl" :options="list" v-model="defaultValue"></selector> -->
    </div>
    <div>
      <x-input title="姓名" v-model="value7" :required="true"></x-input>
      <x-input title="年龄" v-model="value8" text-align="center"></x-input>
      <x-input title="住址" v-model="value9" label-width="4em"></x-input>
      <x-input title="电话" v-model="value10" @on-click-clear-icon="clear"></x-input>
    </div>
    <div class="timeline-demo">
      <timeline>
        <timeline-item>
          <h4 class="recent">【广东】 广州市 已发出</h4>
          <p class="recent">2016-04-17 12:00:00</p>
        </timeline-item>
        <timeline-item>
          <h4> 申通快递员 广东广州 收件员 xxx 已揽件</h4>
          <p>2016-04-16 10:23:00</p>
        </timeline-item>
        <timeline-item>
          <h4> 商家正在通知快递公司揽件</h4>
          <p>2016-04-15 9:00:00</p>
        </timeline-item>
      </timeline>
    </div>
    <div class="vux-circle-demo">
      <div style='width:100px;height:100px;'>
        <x-circle
          :percent="percent"
          :stroke-width="6"
          :trail-width="6"
          :stroke-color="['#36D1DC', '#5B86E5']"
          trail-color="#ececec">
          <span style="color:#36D1DC">{{ percent }}%</span>
        </x-circle>
      </div>
    </div>
  </div>
</template>

<script>
import { XCircle, Timeline, TimelineItem, Search, Rater, XSwitch, InlineXNumber, XInput, Group, Calendar, Cell, Badge, CellBox, CheckIcon, Checker, CheckerItem, DatetimeRange } from 'vux'
export default {
  components: {
    Calendar,
    Group,
    Cell,
    Badge,
    CellBox,
    CheckIcon,
    Search,
    Checker,
    CheckerItem,
    DatetimeRange,
    XInput,
    InlineXNumber,
    XSwitch,
    XCircle,
    Rater,
    Timeline,
    TimelineItem
  },
  data () {
    return {
      percent: 1,
      num: 1,
      value: ['2017-01-15', '03', '05'],
      show1: false,
      text1: 'loading',
      readonly: false,
      demo1: 'TODAY',
      str: '日历',
      demo3: false,
      demo4: true,
      demo7: '',
      data3: '5',
      results: [],
      value2: 'test',
      value7: '',
      value8: '',
      value9: '',
      value10: ''
    }
  },
  created () {
    let self = this
    let timer = setInterval(function () {
      if (self.percent >= 99) {
        clearInterval(timer)
        self.percent = 100
        return true
        // self.percent = 100
      }
      self.percent += 2
    }, 50)
  },
  methods: {
    log (str) {
      console.log(this.demo1)
      console.log(str)
    },
    onChange (val) {
      console.log('on change', val)
    },
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      console.log(val)
      // this.results = val
      //! ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    },
    fn () {
      console.log('clear' + this.value2)
    },
    clear () {
      console.log('clear' + this.value10)
    }
  }
}
</script>
<style lang='scss' scoped>
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
.timeline-demo {
  p {
    color: #888;
    font-size: 0.8rem;
  }
  h4{
    color: #666;
    font-weight: normal;
  }
  .recent{
    color: rgb(4, 190, 2)
  }
}
.vux-circle-demo {
  padding-top: 20px;
  text-align: center;
}
.vux-circle-demo > div {
  margin: 0 auto;
}
</style>
