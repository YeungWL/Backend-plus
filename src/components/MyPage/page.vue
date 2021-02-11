<!--
 * @Date: 2021-02-12 00:52:35
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-12 01:13:31
 * @Description: 页面容器
-->
<template>
  <div class="page-container">
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
};
</script>

<style lang="less" scoped>
.page-container {
  padding: 10px;
  background-color: @white;
}
</style>
