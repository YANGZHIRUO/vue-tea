<template>
  <div class="tabbar">
    <ul>
      <li v-for="(item,index) in routerList" :key="index"
      @click="switchTab(item.path)"
      >
        <img :src='$route.path.includes(item.path)? item.selected : item.active' alt="">
        <span :class="$route.path.includes(item.path) ? 'active': ''">{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  data(){
    return{
      //active为默认,selectd为选中
      routerList:[
        {
          title:"首页",
          path:"/home",
          active:"./images/home.png",
          selected:"./images/home-select.png"
        },
        {
          title:"分类",
          path:"/list",
          active:"./images/list.png",
          selected:"./images/list-select.png"
        },
        {
          title:"购物车",
          path:"/cart",
          active:"./images/cart.png",
          selected:"./images/cart-select.png"
        },
        {
          title:"我的",
          path:"/my",
          active:"./images/my.png",
          selected:"./images/my-select.png"
        }
      ]
    }
  },
  methods:{
    switchTab(path){
      //判断是否点击的是同一个路由
      if(this.$route.path==path) return
      this.$router.replace(path)

    }
  }
}
</script>

<style scoped>
  .tabbar{
    /*position: fixed;*/
    /*left:0;*/
    /*bottom:0;*/
    width: 100%;
    height: 54px;
    /*z-index: 999;*/
    background-color: #fff;
    background-color: #7ee5d9;
  }
  .tabbar ul{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }
  .tabbar ul li{
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .tabbar ul li img{
    width: 30px;
  }
  .tabbar ul li span {
    font-size: 12px;
  }
  .active{
    color: red;
  }
</style>