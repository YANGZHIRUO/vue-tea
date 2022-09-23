<template>
  <div class="search-index">
    <Header></Header>
    <section>
      <div class="search-history" v-if="searchArrey.length">
        <h2>
          <i class="iconfont icon-shijian"></i>
          <span>历史搜索</span>
          <span @click="deleteStorage">清空搜索记录</span>
        </h2>
        <ul>
          <li v-for="(item,index) in searchArrey" :key="index">{{item}}</li>
        </ul>
        <hr/>
      </div>
      <div v-else>
        暂无搜索记录...
      </div>

    </section>
    <Tabbar></Tabbar>
  </div>

</template>

<script>
import Header from "@/components/search/Header.vue"
import Tabbar from '@/components/common/Tabbar.vue'
import {MessageBox} from"mint-ui"
// import Like from "@/components/home/Like.vue"
export default {
  name: "Search",
  data(){
    return{
      searchArrey:[]
    }
  },
  methods:{
    deleteStorage(){
      MessageBox({
        title:"提示",
        message:"确认中止此操作吗",
        showCancelButton:true
      }).then(
          res=>{
            if(res=="confirm"){
              localStorage.removeItem("searchList")
              this.searchArrey=[]
            }
          }
      )
    }

  },
  components:{
    Tabbar,
    Header,
    // Like
  },
  created() {
    this.searchArrey=JSON.parse(localStorage.getItem("searchList")||[])
  }
}
</script>

<style scoped>
.search-index{
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
.search-history{

}
.search-history h2{
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 500;
  position: relative;
}
.search-history h2 i{
  /*padding: 20px 0;*/
  color: red;
  padding: 0 3px;
  font-size: 18px;
}
.search-history ul{
  padding: 0px 10px;
  display: flex;
  flex-wrap: wrap;
}
.search-history ul li{
  border: 1px solid #ccc;
  font-size: 14px;
  padding: 3px 6px;
  margin: 10px;
}
.search-history h2 span:last-child {
  position: absolute;
  right: 24px;
  /*top: 0;*/
}
</style>