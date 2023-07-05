<template>
  <view class="container">
    <view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
    <text class="intro">详见：</text>
    <uni-link :href="href" :text="href"></uni-link>
    <uni-rate v-model="score"></uni-rate>
    <template v-for="item in list" :key="item.key">
      <view>{{item.title}}</view>
    </template>
  </view>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        href: 'https://uniapp.dcloud.io/component/README?id=uniui',
        list: [
          { title: '政府', key: 'gov' },
          { title: '企业', key: 'com' },
        ]
      }
    },
    computed: {
      score() : number {
        return 5
      }
    }
  }
</script>

<style lang="scss">
  .container {
    padding: 20px;
    font-size: 14px;
    line-height: 24px;

    .intro {
      font-size: 12px;
    }
  }
</style>