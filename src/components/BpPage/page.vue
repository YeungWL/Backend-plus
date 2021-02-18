<!--
 * @Date: 2021-02-12 00:52:35
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-17 23:32:30
 * @Description: 页面容器
-->
<template>
  <div
    class="page-container"
    :style="{ 'min-height': minHeight }"
  >
    <div class="page-search">
      <slot name="search"></slot>
    </div>
    <div class="info">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-page",
  computed: {
    minHeight() {
      let h =
        (document.documentElement.clientHeight || document.body.clientHeight) -
        90 +
        "px";
      return h;
    },
  },
};
</script>

<style lang="less" scoped>
.page-container {
  padding: 10px;
  background-color: @white;
}
</style>
