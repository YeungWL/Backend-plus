<!--
 * @Date: 2021-02-01 23:55:59
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-12 01:09:26
 * @Description: 后台管理系统页面的基本框架
-->
<template>
  <el-container class="main-container">
    <!-- 左则导航 -->
    <el-aside
      width="200px"
      class="aside-container"
    >
      <el-menu
        :default-openeds="['1']"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item-group>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
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
        <div>
          <em class="el-icon-s-fold je-f24"></em>
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

<style lang="less" scoped>
.main-container {
  height: 100%;
  .aside-container {
    background-color: rgba(#545c64, 0.9);
  }
  .head-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // color: #fff;
    background-color: @white;
    position: relative;
    z-index: 999;
  }
  .main-container {
    background-color: rgb(238, 241, 246);
    padding: 20px;
  }
}
</style>
