<template>
  <header>
    <h1>
      <img src="@/assets/images/logo.png" alt="">
    </h1>
    <div class="search" @click="goSearch">
      <i class="iconfont icon-fangdajing"></i>
      <span>搜你喜欢的....</span>
    </div>
    <div class="kefu">
      <i class="iconfont icon-kefu"></i>
    </div>
<!--    <router-view></router-view>-->
  </header>
</template>

<script>
export default {
  name: "Header",
  methods:{
    goSearch(){
      this.$router.push("/Search")
    }
  }
}
</script>

<style scoped>
  header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*width: 100%;*/
    height: 45px;
    background-color: #7ee5d9;
  }
  header h1{
    width: 72px;
    height: 37px;
  }
  header h1 img{
    width: 100%;
    height: 100%;
  }
  .search{
    display: flex;
    align-items: center;
    width: 210px;
    height: 32px;
    background-color: #ffffff;
    border-radius: 16px;
  }
  .search i{
    padding: 10px;
    color: #ccc;
  }
  .search span{
    font-size: 16px;
    color: #ccc;
  }
  .kefu i{
    font-size: 30px;
    color: #ffffff;
  }
</style>