<template>
  <el-container>
    <el-main>
      <div class="block">
        <el-carousel height="150px">
          <!--<el-carousel-item v-for="item in bigScreen.images" :key="item.name" :name="item.name">
            <img style="width:100%;height:100%;" :src="item.url"/>
          </el-carousel-item>-->
          <el-carousel-item>
            <img src="../assets/images/1.jpg" class="carousel_image_type">
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/images/screen1.jpg" class="carousel_image_type">
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/images/screen2.jpg" class="carousel_image_type">
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/images/screen3.jpg" class="carousel_image_type">
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/images/screen4.jpg" class="carousel_image_type">
          </el-carousel-item>
        </el-carousel>
      </div>
      <img src="../assets/images/2.jpg" class="carousel_image_type" style="width: 100%">
      <img src="../assets/images/3.jpg" class="carousel_image_type" style="width: 100%">
      <img src="../assets/images/4.jpg" class="carousel_image_type" style="width: 100%">
      <img src="../assets/images/5.jpg" class="carousel_image_type" style="width: 100%">
      <img src="../assets/images/6.jpg" class="carousel_image_type" style="width: 100%">
      <img src="../assets/images/7.jpg" class="carousel_image_type" style="width: 100%">
      <img src="../assets/images/8.jpg" class="carousel_image_type" style="width: 100%">
      <img src="../assets/images/9.jpg" class="carousel_image_type" style="width: 100%">
      <img src="../assets/images/10.jpg" class="carousel_image_type" style="width: 100%">
      <img src="../assets/images/11.jpg" class="carousel_image_type" style="width: 100%">


    </el-main>
  </el-container>
</template>

<script>
    export default {
        name: "Show"
    }
</script>

<style scoped>

</style>
