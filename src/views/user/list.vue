<!--
 * @Description: 用户列表
 * @Author: Yeung
 * @Date: 2021-02-19 00:00:09
 * @LastEditors: ywl
 * @LastEditTime: 2021-03-10 11:45:12
-->
<template>
  <BpPage>
    <template #search>
      <el-form label-width="90px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="员工账号">
              <el-input v-model="pageParams.account"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="手机号">
              <el-input v-model="pageParams.account"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="姓名">
              <el-input v-model="pageParams.account"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="账号类型">
              <el-input v-model="pageParams.account"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="padding-left-90 margin-bottom-20">
        <el-button type="primary">查询</el-button>
        <el-button type="info">重置</el-button>
      </div>
    </template>
    <template #info>
      <el-table
        class="width--100"
        border
        :data="pageInfo.list"
        :header-cell-style="{background:'#f5f7fa',color:'#606266'}"
      >
        <el-table-column
          label="姓名"
          prop="name"
        ></el-table-column>
        <el-table-column
          label="登录账号"
          prop="account"
        ></el-table-column>
        <el-table-column
          label="手机号码"
          prop="phone"
        ></el-table-column>
        <el-table-column
          label="账号类型"
          prop="userType"
        ></el-table-column>
        <el-table-column
          label="公司组织"
          prop="organization"
        ></el-table-column>
        <el-table-column
          label="修改人"
          prop="updateUser"
        ></el-table-column>
        <el-table-column
          label="修改时间"
          prop="updateTime"
          width="155"
        ></el-table-column>
      </el-table>
    </template>
    <template #pagination>
      <el-pagination
        @size-change="handleSizeChangeMixin"
        @current-change="handleCurrentChangeMixin"
        :current-page.sync="pageParams.pageNum"
        :page-sizes="pageSizes"
        :page-size="pageParams.pageSize"
        :layout="pageLayout"
        :total="pageInfo.total"
      ></el-pagination>
    </template>
  </BpPage>
</template>

<script>
// 导入分页mixin
import pagination from "@/utils/pagination.js";

export default {
  name: "userList",
  mixins: [pagination],
  data() {
    return {
      pageParams: {
        account: "",
      },
      pageInfo: {
        total: null,
        list: [],
      },
    };
  },
  methods: {
    async getListMixin() {
      try {
        this.pageInfo = await this.$apis.getUserList(this.pageParams);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getListMixin();
  },
};
</script>
