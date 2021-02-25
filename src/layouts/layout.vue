<!--
 * @Date: 2021-02-01 23:55:59
 * @LastEditors: ywl
 * @LastEditTime: 2021-02-25 15:45:45
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
        :default-active="$route.path"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        class="aside-menu"
        @select="menuSelect"
      >
        <template v-for="(item) in userMenu">
          <!-- 判断路由只有一层 -->
          <el-menu-item
            :index="item.url"
            v-if="!item.children"
            :key="item.id"
          >
            <i :class="item.icon || 'el-icon-folder'"></i>
            <span>{{item.name}}</span>
          </el-menu-item>
          <!-- 判断路由为两层 -->
          <el-submenu
            :index="item.url"
            :key="item.id"
            v-if="item.children"
          >
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="(childItem, childIndex) in item.children">
              <el-menu-item
                :key="childIndex"
                :index="childItem.url"
              >{{childItem.name}}</el-menu-item>
            </template>
          </el-submenu>
        </template>
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
      <div class="tags-container">
        <TagsView :routes="userMenu" />
      </div>
      <!-- 主要的内容展示区域 -->
      <el-main class="main-container">
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import TagsView from "./components/TagsView/index";
import { mapGetters } from "vuex";

export default {
  name: "Layout",
  components: { TagsView },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      userInfo: "user/userInfo",
      userMenu: "user/getUserMenu",
      isCollapse: "app/isOpened",
    }),
    asideWidth() {
      return this.isCollapse ? "64px" : "200px";
    },
  },
  methods: {
    /**
     * @description: 导航菜单跳转
     * @param {*} routePath
     */
    menuSelect(routePath) {
      this.$router.push({
        path: routePath,
      });
    },
    /**
     * @description: 导航菜单折叠方法
     */
    handleToggle() {
      this.$store.dispatch("app/toggleSideBar");
    },
  },
  created() {
    this.$store.dispatch("user/getUserMenu");
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
    position: relative;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: @white;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .el-icon-s-fold.active {
      transform: rotate(180deg);
    }
  }
  .tags-container {
    position: relative;
    z-index: 999;
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
