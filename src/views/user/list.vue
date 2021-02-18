<!--
 * @Description: 用户列表
 * @Author: Yeung
 * @Date: 2021-02-19 00:00:09
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-19 00:36:42
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
      <div>
        <el-button type="primary">查询</el-button>
        <el-button type="info">重置</el-button>
      </div>
    </template>
  </BpPage>
</template>

<script>
export default {
  name: "userList",
  data() {
    return {
      pageParams: {},
    };
  },
};
</script>
