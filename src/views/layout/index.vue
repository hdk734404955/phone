<template>
  <div class="layout-container">
    <router-view></router-view>
    <van-tabbar class="layout-tabbar" route>
      <van-tabbar-item to="/home">
        <i slot="icon" class="iconfont icon-shouye"></i>
        <span class="text">首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/order">
        <i slot="icon" class="iconfont icon-dingdan"></i>
        <span class="text">订单</span>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <i slot="icon" class="iconfont icon-gerenzhongxin"></i>
        <span class="text">我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',

  data () {
    return {}
  },

  mounted () {},

  methods: {}
}
</script>

<style lang="less" scoped>
.layout-container {
  .layout-tabbar {
    .iconfont {
      font-size: 30px;
    }
  }
}
</style>
