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
          <div slot="title" @click="myprofile">个人主页</div>
        </el-menu-item>
        <el-menu-item index="2">
          <div slot="title" @click="myorder">我的订单</div>
        </el-menu-item>
        <el-menu-item index="3">
          <span slot="title">系统消息</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
  <el-table
    :data="orderData"
    height="550"
    border
    style="width: 100%">
    <el-table-column
      prop="order_id"
      label="订单编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="product_name"
      label="产品名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="order_number"
      label="产品数量">
    </el-table-column>
    <el-table-column
      prop="price"
      label="产品价格">
    </el-table-column>
    <el-table-column
      prop="payment_status"
      label="订单状态" :formatter="status">
    </el-table-column>
    <el-table-column
      prop="ordertime"
      label="下单时间">
    </el-table-column>

  </el-table>
    </el-main>
  </el-container>
</template>

<script>
  import {getRequest} from '../../utils/api'
  import {postRequest} from '../../utils/api'
  export default {
    data() {
      return{
        orderData:[]
      }
    },
    mounted: function () {
      var _this = this;
      getRequest("/order/getUserOrder").then(resp => {
        if (resp.status == 200) {
          _this.orderData = resp.data;
        }
      })
    },
    methods:{
      myprofile(){
        var _this = this;
        alert(aaa);
        _this.$router.replace({path: '/persionhomepage/myprofile'});
      },
      myorder(){

        var _this = this;
        alert(aaa);
        _this.$router.replace({path: '/persionhomepage/myorder'});
      },
      status(row, column){
        if (row.payment_status === 1) {
          return '已下单'
        }else if (row.payment_status === 2) {
          return '已付款'
        }
      }
    }
  }
</script>
