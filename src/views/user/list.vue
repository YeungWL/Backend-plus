<!--
 * @Description: 用户列表
 * @Author: Yeung
 * @Date: 2021-02-19 00:00:09
 * @LastEditors: ywl
 * @LastEditTime: 2021-03-12 17:21:51
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
              <el-input v-model="pageParams.phone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="姓名">
              <el-input v-model="pageParams.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="账号类型">
              <el-input v-model="pageParams.userType"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="padding-left-90 margin-bottom-20">
        <el-button
          type="primary"
          @click="search()"
        >查询</el-button>
        <el-button
          type="info"
          @click="reset()"
        >重置</el-button>
        <el-button
          type="success"
          @click="handleAdd()"
        >添加</el-button>
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
          min-width="135"
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
        <el-table-column
          fixed="right"
          width="220"
          label="操作"
        >
          <template v-slot="{ row }">
            <el-button
              size="mini"
              type="success"
            >详情</el-button>
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(row)"
            >修改</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="remove(row)"
            >删除</el-button>
          </template>
        </el-table-column>
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
    <!-- 弹窗 -->
    <BpDialog :is-show="addVisible">
      <UserPopup
        :data="tableData"
        :isAdd="isAdd"
        @cancel="() => (addVisible = false)"
        @finish="() => {
          addVisible = false;
          search();
        }"
      />
    </BpDialog>
  </BpPage>
</template>

<script>
// 导入分页mixin
import pagination from "@/utils/pagination.js";
import UserPopup from "./dialog/userPopup";

export default {
  name: "userList",
  components: { UserPopup },
  mixins: [pagination],
  data() {
    return {
      pageParams: {
        account: "",
        phone: "",
        name: "",
        userType: "",
      },
      pageInfo: {
        total: null,
        list: [],
      },
      addVisible: false,
      isAdd: true,
      tableData: null,
    };
  },
  methods: {
    search() {
      this.pageParams.pageNum = 1;
      this.getListMixin();
    },
    reset() {
      Object.assign(this.pageParams, {
        account: "",
        phone: "",
        name: "",
        userType: "",
      });
    },
    async remove(row) {
      try {
        await this.$confirm("是否确认删除?", "提示");
        await this.$apis.delUser({ id: row.id });
        this.$message.success("删除成功");
        this.removeMixin();
      } catch (error) {
        console.log(error);
      }
    },
    handleEdit(row) {
      this.isAdd = false;
      this.addVisible = true;
      this.tableData = { ...row };
    },
    handleAdd() {
      this.isAdd = true;
      this.addVisible = true;
    },
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
