<!--
 * @Date: 2021-01-31 13:01:57
 * @LastEditors: Yeung
 * @LastEditTime: 2021-01-31 23:16:29
 * @Description: 登录
-->
<template>
  <div class="login-wrap">
    <div class="login-box">
      <el-row>
        <el-col
          :span="13"
          class="logshowpic"
        > </el-col>
        <el-col
          :span="10"
          class="logshowbox"
        >
          <div class="logo"></div>
          <h3 class="je-tc je-f22 je-c8">欢迎登录</h3>
          <div class="logingui">
            <el-form
              onsubmit="return false;"
              :model="form"
              :rules="rules"
              size="default"
              label-width="0px"
              style="height:260px"
              ref="login"
            >
              <el-form-item prop="account">
                <el-input
                  v-model="form.account"
                  placeholder="请输入登录账号"
                  prefix-icon="el-icon-user"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  type="password"
                  v-model="form.password"
                  placeholder="请输入密码"
                  prefix-icon="el-icon-lock"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  class="logobtn je-w80 je-f16 je-mt20"
                  round
                  @click="verifyLogin"
                >登录平台</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        account: "",
        password: "",
      },
      rules: {
        account: [
          { required: true, message: "请输入登录账号", trigger: "change" },
          {
            min: 5,
            max: 20,
            message: "登录账号为5～20个英文或数字",
            trigger: "change",
          },
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "change" },
          {
            min: 5,
            max: 20,
            message: "登录密码为5～20个字符",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    verifyLogin() {
      this.$refs.login.validate(async (val) => {
        if (val) {
          console.log(val);
          try {
            const loginInfo = await this.$apis.login(this.form);
            console.log(loginInfo);
          } catch (error) {
            console.log(error);
          }
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login-wrap {
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url("../../assets/images/bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-box {
    position: absolute;
    width: 1030px;
    display: flex;
    .logshowpic {
      width: 567px;
      display: inline-block;
      background-image: url("../../assets/images/bgbar.png");
      background-repeat: no-repeat;
      background-position: center left;
      background-size: contain;
      flex: 1;
      height: 100%;
    }
    .logshowbox {
      margin-left: 40px;
      width: 400px;
      background-color: rgba(255, 255, 255, 1);
      border-radius: 8px;
      justify-self: center;
      align-self: center;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(99, 64, 64, 0.3);
      // background-image: url('~@img/logbg.png');
      // background-repeat: no-repeat;
      // background-position: center bottom;
      // background-size: 100% auto;
    }
    .logo {
      // 设置登录logo
      width: 100%;
      height: 80px;
      // background-image: url('~@img/logo-blue.png');
      background-color: #fff;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 34% auto;
    }
    ul {
      padding: 50px 50px 50px 50px;
      li {
        padding: 10px 0;
      }

      .logobtn {
        box-shadow: 0 2px 8px 0 rgba(0, 160, 232, 0.6);
        background: -webkit-linear-gradient(
          left,
          rgba(0, 160, 232, 0.9),
          rgba(45, 124, 251, 1)
        );
      }
    }
  }
  .logingui {
    padding: 20px 50px 20px 50px;
    text-align: center;
  }
}
</style>
