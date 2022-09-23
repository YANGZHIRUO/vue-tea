<template>
  <header class="header">
    <div class="search-return" @click="goBack">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="search-main">
      <i class="iconfont icon-fangdajing"></i>
      <form action="" onsubmit="return false" @keyup.enter="goSearchList">
        <input type="text" placeholder="搜索你喜欢的产品" v-model="searchValue">
      </form>
    </div>
    <div class="search-btn" @click="goSearchList">
      搜索
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      searchValue:this.$route.query.key || "",
      searchArr:[]
    }
  },
  watch:{
    $route(){

    }
  },
  created() {

  },
  methods:{
    goBack(){
      this.$router.back()
    },
    goSearchList(){
      if(!this.searchValue){
        return
      }
      if( !localStorage.getItem("searchList")){
        // console.log(33);
        localStorage.setItem("searchList","[]")
      }else{
        this.searchArr=JSON.parse(localStorage.getItem("searchList"))
      }
      this.searchArr.unshift(this.searchValue)
      this.searchArr=[...new Set(this.searchArr)]
      localStorage.setItem("searchList",JSON.stringify(this.searchArr))
      if(this.searchValue==this.$route.query.key){
        return false
      }

      this.$router.push({
        name:"list",
        query:{
          key:this.searchValue
        }
      })
    }
  }
}
</script>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 44px;
  background-color:#7ee5d9 ;
  color: #fff;
}
.search-return i{
  font-size: 28px;
}
.search-return,.search-btn{
  padding: 0 10px;
}
.search-btn{
  font-size: 16px;
}
.search-main{
  display: flex;
  background-color: #fff;
  border-radius: 12px;
  align-items: center;
  width: 260px;
  height: 30px;
}
.search-main form{
  /*display: flex;*/
  /*justify-content: center;*/
  /*align-items: center;*/
}
.search-main i{
  padding: 0 10px;
  color: #6666;
}
</style>