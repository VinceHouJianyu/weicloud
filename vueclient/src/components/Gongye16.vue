<template>

  <el-container  >

    <el-main>

          <el-card class="box-card">
            <div class="text item">
              <span v-model="product.product_name" >{{product.product_name}} </span>
            </div>
            <div class="text item">
              <span v-model="product.description" >{{product.description}} </span>
            </div>
            <div class="text item">
              规格： 标准版
            </div>
            <div class="text item">
              购买方式： 按年
            </div>
            <div class="text item">
              <span> 购买时长：<el-input-number v-model="product.num" @change="getAllPrice(product.price,product.num)" ></el-input-number></span>
            </div>
            <div class="text item">
              <span style="margin-right:20px;display:inline-block">总价：{{product.price*product.num}}元</span>

            </div>
            <div class="text item">
              <span v-model="product.price" >单价： {{product.price}} 元</span>
            </div>
            <el-button style="padding: 3px" type="text" @click.native="orderNow(product.price,product.product_name,product.product_id,product.num)">立即下单</el-button>
          </el-card>
      <el-card>
      <div class="text item">
        <pre>
          商品说明

          H5营销轻定制	1．购买任意页数均享受8折，6-50页随心定制
                      2．2-5个工作日即可拥有专属精美H5页面
                      3．疫情防控、企业招聘、产品展示、贺卡邀请函等
          云短信	1．购买任意页数均享受8折，6-50页随心定制
                2．2-5个工作日即可拥有专属精美H5页面
                3．疫情防控、企业招聘、产品展示、贺卡邀请函等
          智慧零售	1．结构化分析顾客行为数据，辅助运营决策
                  2．AI+大数据，实现客流分析、VIP客户识别
                  3．支持消费分析，店铺远程管理

        </pre>
      </div>
      </el-card>
      <el-card>
      <div class="text item">
        <pre>
           定价
            购买方式按年
            规格	SKU名称	数量属性值	单价
            标准版	 元/年
        </pre>
      </div>
      </el-card>
      <el-card>
        <div class="text item">
        <pre>
         支持范围
          售后服务时间：5* 8小时
          售后服务内容：培训支持，远程支持，现场服务（需收费），系统升级
          服务热线：0533-2833988
          服务邮箱：xiedi@weiyunhl.com
        </pre>
      </div>
      </el-card>
      <el-card>
      <div class="text item">
        <pre>
       用户案例
      无锡邦得机械智能工厂项目
      无锡邦得机械有限公司始建于1993年,是一家集铝合金铸造与机加工于一体的世界级生产制造商，其产品90%用于出口，广泛应用于汽车，摩托车，能源，水处理等行业。
      该项目是海宝模块定制型项目的典型案例，系统功能覆盖从业务部门到原料仓库、熔炼车间、有色浇铸、金工加工、成品仓库的全流程，模块涉及销售、采购、外协、工程数据、
          计划、车间、工位、质检、仓库、设备、模块、条码、报表移动APP等14大模块，功能深度根据邦得实际需求达到了249个菜单。
      该项目也帮助无锡邦得实现了标准定义、流程优化及管理提升，实现了工厂范围内的数字化升级和应用。
        </pre>
      </div>
      </el-card>

      <img src="../assets/images/foot.jpg" class="carousel_image_type" >
    </el-main>







  </el-container>
</template>

<script>
  import {getRequest} from '../utils/api'
  import {postRequest} from '../utils/api'
  export default {
    mounted: function () {
      var _this = this;
      getRequest("/product/getOneProduct?product_id=32").then(resp => {
        if (resp.status == 200) {
          _this.product = resp.data;
        }
      })
      this.allPrice = product.price * product.num;
    },
    data() {
      return {
        product: {},
        loading: false
      }
    },
    methods: {

      getAllPrice(price,num) {
        this.allPrice = price * num;
      },

      orderNow(price,name,id,num) {
        var _this = this;
        /* this.$confirm('确认立即下单吗?', '提示', {
           confirmButtonText: '确定',
           cancelButtonText: '取消',
           type: 'warning'
         }).then(function () {*/
        postRequest("/product/addOrder", {

          product_name: name,
          product_id: id,
          price: price,
          num: num
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


  .box-card {
    width: 600px;
  }



</style>
