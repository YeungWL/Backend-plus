<template>
  <div id="app">
    <Layout v-if="$route.meta.isAuth">
      <router-view />
    </Layout>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script>
import Layout from "@/layouts/layout";
export default {
  name: "App",
  components: { Layout },
  created() {
    console.log(this.$route);
  },
};
</script>

<style lang="less">
@import url("./styles/index.less");
#app {
  position: relative;
  width: 100%;
  height: 100vh;
}
</style>
