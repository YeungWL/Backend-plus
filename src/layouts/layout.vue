<!--
 * @Date: 2021-02-01 23:55:59
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-08 00:21:01
 * @Description: 后台管理系统页面的基本框架
-->
<template>
  <el-container class="main-container">
    <!-- 左则导航 -->
    <el-aside
      width="200px"
      class="aside-container"
    >
      <el-menu :default-openeds="['1']">
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
            <span class="white">王小虎</span>
            <em class="el-icon-caret-bottom white"></em>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <!-- 主要的内容展示区域 -->
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.main-container {
  height: 100%;
  .aside-container {
    background-color: rgb(238, 241, 246);
  }
  .head-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #409eff;
    color: #fff;
  }
}
.white {
  color: @white;
}
</style>
