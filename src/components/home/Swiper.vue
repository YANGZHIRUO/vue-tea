<template>
  <div class="swiper-main">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in swiperList" :key='index'>
        <img :src="item.imgUrl" alt="">
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination"></div>

  </div>
</template>

<script>
import "swiper/dist/css/swiper.css"
import {swiper,swiperSlide} from "vue-awesome-swiper"
export default {
  name: "Swiper",
  props:{
    swiperList:Array
  },
  components:{
    swiper,
    swiperSlide
  },
  data(){
    return{
      // swiperList:[
      //   {id:1,imgUrl:"./images/swiper1.jpeg"},
      //   {id:2,imgUrl:"./images/swiper2.jpeg"},
      //   {id:1,imgUrl:"./images/swiper3.jpeg"},
      // ],
      swiperOption:{
        autoplay:3000,
        speed:1000,
        pagination:{
          el:".swiper-pagination"
        }
      }
    }
  }
}
</script>

<style scoped>
  .swiper-main{
    position: relative;
    width: 100%;
    height: 180px;
  }
  .swiper-main img{
    width: 100%;
    height: 180px;
  }
  .swiper-pagination{
    width: 100%;
    bottom: 0;
  }
  ::v-deep .swiper-pagination-bullet-active{
    background-color: red;
  }
  ::v-deep .swiper-pagination-bullet{
    margin-left: 0.07rem;
  }
</style>