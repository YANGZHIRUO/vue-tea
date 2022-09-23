<template>
<div class="search_list">
  <div class="headers">
  <Header></Header>
    <ul>
      <div>
          <li>综合</li>
      </div>
      <li>
        <div>价格</div>
        <div class="search-filter">
            <i class="iconfont icon-shangjiantou"></i>
            <i class="iconfont icon-xiajiantou"></i>
        </div>
      </li>
      <li>
        <div>销量</div>
        <div class="search-filter">
            <i class="iconfont icon-shangjiantou"></i>
            <i class="iconfont icon-xiajiantou"></i>
        </div>
      </li>

    </ul>
  </div>
  <section>


    <ul>



      <li v-for="(item,index) in goodsList" :key="index">
        <img :src="item.imgUrl" alt="">
        <h3>{{item.name}}</h3>
        <div class="price">
          <div>
            <span>$</span>
            <b>{{item.price}}</b>
          </div>
          <div>立即购买</div>
        </div>
      </li>


    </ul>
  </section>
  <Tabbar></Tabbar>
</div>
</template>

<script>
import Header from "@/components/search/Header.vue"
import Tabbar from "@/components/common/Tabbar";
import http from "@/common/api/request"
export default {
  name: "Search_list",
  data(){
    return{
      goodsList:[]
    }
  },
  components:{
    Header,
    Tabbar
  },
  created() {
    this.getData()
  },
  methods:{
    getData(){
      http.$axios({
        url:"/api/goods/shopList",
        params:{
          searchName:this.$route.query.key
        }
      }).then(res=>{
        this.goodsList=res
      })
    }
  }
}
</script>

<style scoped>
.search_list{
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
section{
  flex: 1;
  overflow: hidden;
}
.headers ul{
  display: flex;
  padding: 10px 0;
  font-size: 16px;
  justify-content: space-around;
}
.headers ul>div:first-child{
  display: flex;
  align-items: center;
}
.headers ul li{
  display: flex;
  align-items: center;

}
.headers ul li>div{
  padding: 0 3px;
}
.headers ul li .search-filter{
  display: flex;
  flex-direction: column;
}
.search-filter i{
  font-size: 8px;
  color: rgb(136, 136, 136);
}
section ul li img{
  width: 170px;
  height: 170px;
}
section ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
section ul li{
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
section ul li h3{
  width: 90%;
  padding: 10px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #222;
}
section ul li .price{
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 10px 0;
}
section ul li .price div:last-child{
  color: #fff;
  background-color: red;
  padding: 3px 6px;
  border-radius: 3px;
}
section ul li .price div:first-child span{
  color: #b0352f;
}
section ul li .price div:first-child b{
  color: #b0352f;
  font-size: 16px;
}
</style>