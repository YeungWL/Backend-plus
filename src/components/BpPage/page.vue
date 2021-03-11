<!--
 * @Date: 2021-02-12 00:52:35
 * @LastEditors: ywl
 * @LastEditTime: 2021-03-11 15:58:13
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
      <slot name="info"></slot>
    </div>
    <div class="pagination">
      <slot name="pagination"></slot>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "bp-page",
  computed: {
    minHeight() {
      let h =
        (document.documentElement.clientHeight || document.body.clientHeight) -
        124 +
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
  .pagination {
    text-align: right;
    margin-top: 16px;
  }
}
</style>
