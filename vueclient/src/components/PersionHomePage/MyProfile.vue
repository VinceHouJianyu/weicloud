<template>

  <el-container >

    <el-aside>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    style="height: 100%">
    <el-menu-item index="1">
      <div slot="title" @click.native="myprofile">个人主页</div>
    </el-menu-item>
    <el-menu-item index="2">
      <div slot="title" @click.native="myorder">我的订单</div>
    </el-menu-item>
    <el-menu-item index="3">
      <span slot="title">系统消息</span>
    </el-menu-item>
  </el-menu>
    </el-aside>

    <el-main>
      <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>基本信息</span>
        <el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
      </div>
      <div class="text item">
        姓名： <span>{{myProfile.nickname}}</span>
      </div>
      <div class="text item">
           手机号： <span>{{myProfile.phone}}</span>
      </div>
        <div class="text item">
            邮箱：<span>{{myProfile.email}}</span>

        </div>
        <div class="text item">
        <span>注册时间:</span><span>{{myProfile.regTime | formatDateTime}}</span>
        </div>
  </el-card>
    </el-main>

  </el-container>
</template>

<script>
  import {getRequest} from '../../utils/api'
  import {postRequest} from '../../utils/api'
    export default {
      name: "MyProfile",
      mounted: function () {
        var _this = this;
        postRequest("/persion/getMyProfile").then(resp => {
          if (resp.status == 200) {
            _this.myProfile = resp.data;
          }
        })
      },
      data() {
        return {
          myProfile: {},
          loading: false

        }
      },
      methods: {

        myprofile(){
          var _this = this;
            _this.$router.replace({path: '/persionhomepage/myprofile'});
        },
        myorder(){
          var _this = this;

          _this.$router.replace({path: '/persionhomepage/myorder'});
        }
      }
    }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 980px;
  }

</style>
