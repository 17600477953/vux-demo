<!--  -->
<template>
  <div class="app-container">
    <box gap="10px 10px ">
      <icon type="success"></icon>
      <icon type="success"></icon>
      <icon type="info"></icon>
      <icon type="info-circle"></icon>
      <icon type="warn"></icon>
      <icon type="waiting"></icon>
      <icon type="waiting-circle"></icon>
      <icon type="safe-success"></icon>
      <icon type="safe_warn"></icon>
      <icon type="success-circle"></icon>
      <icon type="success-no-circle"></icon>
      <icon type="circle"></icon>
      <icon type="download"></icon>
      <icon type="cancel"></icon>
      <icon type="search"></icon>
      <icon type="clear"></icon>
      <br/>
      <icon type="success" is-msg></icon>
      <icon type="info" is-msg></icon>
      <icon type="warn" is-msg></icon>
      <icon type="waiting" is-msg></icon>
      <icon type="safe_success" is-msg></icon>
      <icon type="safe_warn" is-msg></icon>
    </box>
    <group>
      <cell title="used in cell">
        <x-icon type="ios-plus" class="cell-x-icon" @click="consoleFn"></x-icon>
      </cell>
    </group>
    <div style="padding: 15px;">
      <x-icon type="ios-ionic-outline" size="30"></x-icon>
      <x-icon type="ios-arrow-back" size="30"></x-icon>
      <x-icon type="ios-arrow-forward" size="30"></x-icon>
      <x-icon type="ios-arrow-up" size="30"></x-icon>
      <x-icon type="ios-arrow-right" size="30"></x-icon>
      <x-icon type="ios-arrow-down" size="30"></x-icon>
      <x-icon type="ios-arrow-left" size="30"></x-icon>
      <x-icon type="ios-arrow-thin-up" size="30"></x-icon>
      <x-icon type="ios-arrow-thin-right" size="30"></x-icon>
      <x-icon type="ios-arrow-thin-down" size="30"></x-icon>
      <x-icon type="ios-arrow-thin-left" size="30"></x-icon>
      <x-icon type="ios-circle-filled" size="30"></x-icon>
      <x-icon type="ios-circle-outline" size="30"></x-icon>
      <x-icon type="ios-checkmark-empty" size="30"></x-icon>
      <x-icon type="ios-checkmark-outline" size="30"></x-icon>
      <x-icon type="ios-checkmark" size="30"></x-icon>
      <x-icon type="ios-plus-empty" size="30"></x-icon>
      <x-icon type="ios-plus-outline" size="30"></x-icon>
      <x-icon type="ios-plus" size="30"></x-icon>
      <x-icon type="ios-close-empty" size="30"></x-icon>
      <x-icon type="ios-close-outline" size="30"></x-icon>
      <x-icon type="ios-close" size="30"></x-icon>
      <x-icon type="ios-minus-empty" size="30"></x-icon>
      <x-icon type="ios-minus-outline" size="30"></x-icon>
      <x-icon type="ios-minus" size="30"></x-icon>
      <x-icon type="ios-information-empty" size="30"></x-icon>
      <x-icon type="ios-information-outline" size="30"></x-icon>
      <x-icon type="ios-information" size="30"></x-icon>
      <x-icon type="ios-help-empty" size="30"></x-icon>
      <x-icon type="ios-help-outline" size="30"></x-icon>
      <x-icon type="ios-help" size="30"></x-icon>
      <x-icon type="ios-search" size="30"></x-icon>
      <x-icon type="ios-search-strong" size="30"></x-icon>
      <x-icon type="ios-star" size="30"></x-icon>
      <x-icon type="ios-star-half" size="30"></x-icon>
      <x-icon type="ios-star-outline" size="30"></x-icon>
      <x-icon type="ios-heart" size="30"></x-icon>
      <x-icon type="ios-heart-outline" size="30"></x-icon>
    </div>
    <divider>分割线</divider>
    <box gap="10px 10px">
      <x-button>submit</x-button>
      <x-button type="primary">primary</x-button>
      <x-button type="warn">Delete</x-button>

      <divider>link</divider>
      <x-button type="primary" link="/demo">Go to demo list</x-button>
      <x-button type="default" link="BACK">Back</x-button>

      <divider>action type</divider>
      <x-button type="primary" action-type="button">submit</x-button>
      <x-button type="warn" action-type="reset">reset</x-button>

      <divider>loading</divider>
      <x-button type="default" show-loading>submit</x-button>
      <x-button type="primary" show-loading>submit</x-button>
      <x-button type="warn" show-loading>submit</x-button>

      <divider>mini</divider>
      <x-button mini>submit</x-button>
      <x-button mini type="primary">primary</x-button>
      <x-button mini type="warn">Delete</x-button>
      <br>
      <x-button mini plain>submit</x-button>
      <x-button mini plain type="primary">primary</x-button>
      <x-button mini plain type="warn">primary</x-button>

      <divider>plain</divider>
      <x-button plain>submit</x-button>
      <x-button plain type="primary">primary</x-button>
      <x-button plain type="warn">warn</x-button>

      <divider>you can customize styles</divider>
      <x-button plain type="primary" style="border-radius:99px;">primary</x-button>
      <x-button plain type="primary" class="custom-primary-red">primary</x-button>

      <divider>disabled</divider>
      <x-button disabled>disable submit</x-button>
      <x-button type="primary" disabled>disable primary</x-button>
      <x-button type="warn" disabled>disable Delete</x-button>

      <x-button mini disabled>disable mini submit</x-button>
      <x-button mini type="primary" disabled>disable mini primary</x-button>
      <x-button mini type="warn" disabled>disable mini Delete</x-button>

      <x-button plain disabled>disable plain</x-button>
      <x-button plain type="primary" disabled>disable plain primary</x-button>

      <divider>use :text and :disabled</divider>
      <!-- <x-button :text="submit001" :disabled="disable001" @click.native="processButton001" type="primary"></x-button> -->

      <divider>combined with flexbox</divider>
      <flexbox>
        <flexbox-item>
          <x-button type="primary">primary</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="warn">Delete</x-button>
        </flexbox-item>
      </flexbox>
      <divider>combined with flexbox</divider>
      <flexbox>
        <flexbox-item>
          <x-button type="default">default</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="primary">primary</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="warn">Delete</x-button>
        </flexbox-item>
      </flexbox>

    </box>

    <divider>iOS Gradients(v2.7.4)</divider>
    <box gap="10px 10px">
      <x-button :gradients="['#1D62F0', '#19D5FD']">iOS Gradients</x-button>
      <x-button :gradients="['#A644FF', '#FC5BC4']">iOS Gradients</x-button>
      <x-button :gradients="['#FF2719', '#FF61AD']">iOS Gradients</x-button>
      <x-button :gradients="['#6F1BFE', '#9479DF']">iOS Gradients</x-button>
      <x-button :gradients="['#FF5E3A', '#FF9500']">iOS Gradients</x-button>
    </box>
  </div>
</template>

<script>
import { Box, Icon, Group, Cell, XButton, GroupTitle, Flexbox, FlexboxItem, Divider } from 'vux'
export default {
  components: { Box, Icon, Group, Cell, XButton, GroupTitle, Flexbox, FlexboxItem, Divider },
  data () {
    return {
    }
  },

  methods: {
    consoleFn () {
      console.log(1)
    }
  }
}

</script>

<style lang='scss'>
.icon-success-color{
  color: #000!important;
}
.vux-x-icon {
  fill: #F70968;
}
.cell-x-icon {
  display: block;
  fill: green;
}
</style>
