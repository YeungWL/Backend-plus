<!--
 * @Description: 添加用户详情
 * @Author: ywl
 * @Date: 2021-03-11 11:17:18
 * @LastEditors: ywl
 * @LastEditTime: 2021-03-11 17:12:04
-->
<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :before-close="cancel"
    append-to-body
    width="450px"
    :title="`${isAdd ? '添加': '修改'}用户`"
  >
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px"
    >
      <el-form-item
        label="姓名"
        prop="name"
      >
        <el-input
          v-model="form.name"
          placeholder="请输入"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="登录账号"
        prop="account"
      >
        <el-input
          v-model="form.account"
          placeholder="请输入"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="手机号码"
        prop="phone"
      >
        <el-input
          v-model="form.phone"
          placeholder="请输入"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="账号类型"
        prop="userType"
      >
        <el-input
          v-model="form.userType"
          placeholder="请输入"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="公司组织"
        prop="organization"
      >
        <el-input
          v-model="form.organization"
          placeholder="请输入"
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="cancel">取 消</el-button>
      <el-button
        type="primary"
        @click="sumbit"
      >提 交</el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: "user-popup",
  props: {
    isAdd: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      dialogVisible: true,
      form: {
        name: "",
        account: "",
        phone: "",
        userType: "",
        organization: "",
      },
      rules: {
        name: [{ required: true, message: "姓名不能为空", trigger: "change" }],
        account: [
          { required: true, message: "账号不能为空", trigger: "change" },
        ],
        phone: [
          { required: true, message: "手机号不能为空", trigger: "change" },
        ],
        userType: [
          { required: true, message: "账号类型不能为空", trigger: "change" },
        ],
        organization: [
          { required: true, message: "公司组织不能为空", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    cancel() {
      this.$emit("cancel", false);
    },
    sumbit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          if (this.isAdd) {
            await this.$apis.addUserInfo(this.form);
            this.$message.success("添加成功");
            this.$emit("finish");
          }
        } else {
          return false;
        }
      });
    },
  },
};
</script>
