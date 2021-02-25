<!--
 * @Description: 用户列表
 * @Author: Yeung
 * @Date: 2021-02-19 00:00:09
 * @LastEditors: ywl
 * @LastEditTime: 2021-02-23 15:02:09
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
      <div class="padding-left-90">
        <el-button type="primary">查询</el-button>
        <el-button type="info">重置</el-button>
      </div>
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
