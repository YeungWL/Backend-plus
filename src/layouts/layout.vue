<!--
 * @Date: 2021-02-01 23:55:59
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-14 00:30:53
 * @Description: 后台管理系统页面的基本框架
-->
<template>
  <el-container class="main-container">
    <!-- 左则导航 -->
    <el-aside
      :width="asideWidth"
      class="aside-container"
    >
      <el-menu
        :collapse="isCollapse"
        :collapse-transition="false"
        :style="{ width: asideWidth }"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        class="aside-menu"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    <!-- 右则主要内容 -->
    <el-container>
      <el-header
        class="head-container"
        height="50px"
      >
        <div @click="handleToggle">
          <em
            class="el-icon-s-fold je-f20"
            :class="{ 'active': isCollapse }"
          ></em>
        </div>
        <el-dropdown>
          <div>
            <span>王小虎</span>
            <em class="el-icon-caret-bottom"></em>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <!-- 主要的内容展示区域 -->
      <el-main class="main-container">
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Layout",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      userInfo: "user/userInfo",
      isCollapse: "app/isOpened",
    }),
    asideWidth() {
      return this.isCollapse ? "64px" : "200px";
    },
  },
  methods: {
    handleToggle() {
      this.$store.dispatch("app/toggleSideBar");
    },
  },
};
</script>

<style lang="less" scoped>
.main-container {
  height: 100%;
  .aside-container {
    background-color: rgba(#545c64, 0.9);
    transition: width 0.28s;
    overflow: hidden;
  }
  .head-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // color: #fff;
    background-color: @white;
    position: relative;
    z-index: 999;
    .el-icon-s-fold.active {
      transform: rotate(180deg);
    }
  }
  .main-container {
    background-color: rgb(238, 241, 246);
    padding: 20px;
  }
}
</style>
<style lang="less">
.aside-menu {
  border-right: solid 1px rgba(#545c64, 0.9) !important;
}
</style>
