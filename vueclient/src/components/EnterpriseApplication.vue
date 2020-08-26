<template>

  <el-container >
    <el-main>
      <el-card class="box-card" v-for="(product,index) in products" :key="index">
        <div slot="header" class="clearfix">
          <span>企业应用</span>
        </div>
        <div class="text item">
          产品名称： <span v-model="product.product_name">{{product.product_name}}</span>
        </div>
        <div class="text item">
          产品价格： <span>{{product.price}}</span>
        </div>
        <div class="text item">
          产品描述：<span>{{product.description}}</span>
        </div>
        <el-button style="float: right; padding: 3px 0" type="text" @click.native="orderNow(product.price,product.product_name,product.product_id)">立即下单</el-button>
      </el-card>
    </el-main>

  </el-container>
</template>

<script>
  import {getRequest} from '../utils/api'
  import {postRequest} from '../utils/api'
  export default {
    mounted: function () {
      var _this = this;
      getRequest("/product/getAllProduct?product_type=3").then(resp => {
        if (resp.status == 200) {
          _this.products = resp.data;
        }
      })
    },
    data() {
      return {
        products: [],
        loading: false
      }
    },
    methods: {

      orderNow(price,name,id) {
        var _this = this;
       /* this.$confirm('确认立即下单吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {*/
          postRequest("/product/addOrder", {

            product_name: name,
            product_id: id,
            price: price
          }).then(resp => {
            if (resp.status == 200) {
              var json = resp.data;
              this.$message({
                message: json.msg,
                type: json.status
              })
            } else if (resp.status != 200) {
              var json = resp.data;
              this.$message({
                message: json.msg,
                type: json.status
              })
            }
          }, resp => {
            _this.$message({type: 'error', message: '下单失败!'})

          });
        }/*,
          function () {
            //取消
          })
      }*/
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
    text-align: left
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
