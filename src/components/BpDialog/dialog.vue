<!--
 * @Description: 弹窗容器
 * @Author: ywl
 * @Date: 2021-03-11 10:38:53
 * @LastEditors: ywl
 * @LastEditTime: 2021-03-11 14:54:50
-->
<template>
  <div
    class="bp-dialog"
    v-if="isShow"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "bp-dialog",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    console.log(this.isShow);
  },
};
</script>
