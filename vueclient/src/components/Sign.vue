<template>
  <el-container class="pull-height login">
  <el-form :rules="rules" class="login-container" label-position="left"
           label-width="0px" v-loading="loading">
    <h3 class="login_title">系统注册</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="signForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="signForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item prop="nickname">
    <el-input type="text" v-model="signForm.nickname" auto-complete="off" placeholder="姓名"></el-input>
    </el-form-item>
    <el-form-item prop="email">
    <el-input type="text" v-model="signForm.email" auto-complete="off" placeholder="邮箱"></el-input>
    </el-form-item>
      <el-form-item prop="phone">
    <el-input type="text" v-model="signForm.phone" auto-complete="off" placeholder="手机号"></el-input>
      </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" @click="submitClick" style="width: 100%">注册</el-button>

    </el-form-item>
    <!--<el-form-item style="width: 100%">
    <el-button type="primary" @click="backClick" style="width: 100%">返回</el-button>
    </el-form-item>-->
  </el-form>
  </el-container>
</template>
<script>
  import {postRequest} from '../utils/api'
  import {putRequest} from '../utils/api'
  export default{
    data(){
      return {
        rules: {
          account: [{ message: '请输入用户名', trigger: 'change'}],
          checkPass: [{ message: '请输入密码', trigger: 'change'}],
          nickname: [{ message: '请输入姓名', trigger: 'change'}],
          email: [{ message: '请输入邮箱', trigger: 'change'}],
          phone: [{ message: '请输入手机号', trigger: 'change'}],
        },

        signForm: {
          username:"",
          password:"",
          nickname:"",
          email:"",
          phone:""
        },
        loading: false
      }
    },
    methods: {
      submitClick() {
        var _this = this;
        this.loading = true;
        postRequest('/sign/add', {
          username: this.signForm.username,
          password: this.signForm.password,
          nickname: this.signForm.nickname,
          email: this.signForm.email,
          phone: this.signForm.phone
        }).then(resp=> {
          _this.loading = false;
          if (resp.status == 200) {
            //成功
            var json = resp.data;
            if (json.status == 'success') {
              _this.$router.replace({path: '/login'});
            } else {
              _this.$alert('注册失败!', '失败!');
            }
          } else {
            //失败
            _this.$alert('注册失败!', '失败!');
          }
        }, resp=> {
          _this.loading = false;
          _this.$alert('找不到服务器⊙﹏⊙∥!', '失败!');
        });
      }
    }
  }
</script>
<style>
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 20px auto;
    text-align: center;
    color: #505458;
  }
  .login {
    background-image: url("../assets/images/denglu.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
