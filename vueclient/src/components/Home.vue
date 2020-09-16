<template>

  <el-container class="home_container">
    <el-header class="el-header">
      <img src="../assets/images/logo.png" width="180 px"/>
      <!--<el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2" style="width: auto"></el-input>-->
      <div class="home_userinfoContainer" >
       <div v-if="currentUserName == '游客'">
         <router-link :to="{ path: '/login' }"  >登录</router-link>
         <router-link :to="{ path: '/sign' }"  >注册</router-link>
       </div>
        <div v-else>
        <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link home_userinfo">
    {{currentUserName}}<i class="el-icon-arrow-down el-icon--right home_userinfo"></i>
  </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="MyHome">个人主页</el-dropdown-item>
            <el-dropdown-item command="MyOrder">我的订单</el-dropdown-item>
            <el-dropdown-item command="MyUser">用户管理</el-dropdown-item>
            <el-dropdown-item command="sysMsg">系统消息</el-dropdown-item>
            <!--<el-dropdown-item command="MyArticle">我的文章</el-dropdown-item>-->

            <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        </div>
      </div>
    </el-header>
      <el-header class="el-header" >
        <el-menu
          default-active="activeIndex" mode="horizontal"
          class="el-menu-vertical-demo" style="background-color: #ECECEC" router>
          <template v-for="(item,index) in this.$router.options.routes" v-if="!item.hidden">
            <el-submenu :index="index+''" v-if="item.children.length>1" :key="index">
              <template slot="title">
                <i :class="item.iconCls"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item v-for="child in item.children" v-if="!child.hidden" :index="child.path" :key="child.path">
                {{child.name}}
              </el-menu-item>
            </el-submenu>
            <template v-else>
              <el-menu-item :index="item.children[0].path">
                <i :class="item.children[0].iconCls"></i>
                <span slot="title">{{item.children[0].name}}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-header>
      <el-container>
        <el-main>
       <!--   <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-text="this.$router.currentRoute.name"></el-breadcrumb-item>
          </el-breadcrumb>-->
          <keep-alive>
            <router-view v-if="this.$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!this.$route.meta.keepAlive"></router-view>
        </el-main>
      </el-container>

  </el-container>

</template>
<script>
  import {getRequest} from '../utils/api'
  export default{
    methods: {
      handleCommand(command){
        var _this = this;
        if (command == 'logout') {
          this.$confirm('注销登录吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(function () {
            getRequest("/logout")
            _this.currentUserName = '游客';
            _this.$router.replace({path: '/'});
          }, function () {
            //取消
          })
        }
        if (command == 'MyHome') {
          _this.$router.replace({path: '/persionhomepage/myprofile'});
        }
        if (command == 'MyOrder') {
          _this.$router.replace({path: '/persionhomepage/myorder'});
        }
        if (command == 'MyUser') {
          _this.$router.replace({path: '/persionhomepage/user'});
        }
      }
    },
    mounted: function () {
      var _this = this;
      getRequest("/currentUserName").then(function (msg) {
        _this.currentUserName = msg.data;
      }, function (msg) {
        _this.currentUserName = '游客';
      });
      _this.$router.replace({path: '/show'});
    },
    data(){
      return {
        currentUserName: ''
      }
    }
  }
</script>
<style>
  .home_container {
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
  }

  .el-header {
    background-color: #ECECEC;
    color: #333;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    left: 30px;
  }

  .el-aside {
    background-color: #ECECEC;
  }

  .el-main {
    background-color: #fff;
    color: #000;
    text-align: center;
  }

  .home_title {
    color: #FFFFFF;
    font-size: 8px;
    display: inline;
  }

  .home_userinfo {
    color: #000000;
    cursor: pointer;
  }

  .home_userinfoContainer {
    display: inline;
    margin-right: 20px;
  }
   .el-carousel__item h3 {
     color: #475669;
     font-size: 14px;
     opacity: 0.75;
     line-height: 150px;
     margin: 0;
   }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .carousel_image_type{
    width: 100%;
  }
</style>
