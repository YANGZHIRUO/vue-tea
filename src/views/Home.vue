<template>


  <div class="home">

    <div class="headers">
      <div class="header-main">
      <Header></Header>
      <ly-tab
          v-model="selectedId"
          :items="items"
          :options="options"
          @change="changeTab"
      ></ly-tab>
      </div>
    </div>


    <section class="wrapper">
      <div>
        <div v-for="(item,index) in newData" :key="index">
<!--          {{item}}-->
            <Swiper v-if="item.type==='swiperList'" :swiperList="item.data"></Swiper>
            <Icons v-if="item.type==='iconsList'" :iconsList="item.data"></Icons>
            <Recommend v-if="item.type==='recommendList'" :recommendList="item.data"></Recommend>
            <Ad v-if="item.type==='adList'" :adList="item.data"></Ad>
            <Like v-if="item.type==='likeList'" :likeList="item.data"></Like>
        </div>
      </div>
    </section>



    <Tabbar></Tabbar>

  </div>
</template>

<script>
import axios from "axios"
import Tabbar from "@/components/common/Tabbar"
import Header from "@/components/home/Header"
import Swiper from "@/components/home/Swiper"
import Icons from "@/components/home/Icons"
import Recommend from "@/components/home/Recommend.vue"
import BetterScroll from "better-scroll"
import Like from "@/components/home/Like.vue"
import Ad from "@/components/home/Ad";

export default {
  name: 'Home',
  data(){
    return{
      selectedId:0,
      newData:[],
      items:[],
      options:{
        activeColor:"#b0352f"
      }
    }
  },
  components:{
    Ad,
    Tabbar,
    Header,
    Swiper,
    Icons,
    Recommend,
    Like,
  },
  mounted() {
    // this.$nextTick(()=>{
    //   console.log(8888);
    //   new BetterScroll(".wrapper",{
    //     movable:true,
    //     zoom:true,
    //   })
    // })
    console.log("mounted");
  },
  created() {
    console.log("create");
    this.getData()

  },
  methods: {
    async getData() {
      let res=await axios({
        url: "/api/index_list/0/data/1"
      })
        console.log("data");
        console.log(res);
        this.items = res.data.data.topBar
        // 初始化(首页数据)newData
        this.newData = res.data.data.data
        console.log(res.data.data.data, "home组件数据解析完毕时，请求/api/index_list/0/data/1，获得section中所有数据(arrey)");
      // })
      this.$nextTick(()=>{
        console.log(777);
        new BetterScroll(".wrapper",{
          movable:true,
          zoom:true,
        })
      })

    },
    addData(index) {
      axios({
        //点哪一个发哪一个请求
        url: "/api/index_list/" + index + "/data/1"
      }).then(res => {
        if (!(res.data.data instanceof Array)) {
          this.newData = res.data.data.data
          console.log(`你点击的位置索引为${index},由于这个索引请求数据data为${res.data}，所以深层取出，改变newData,刷新页面`)
        } else {
          //
          this.newData = res.data.data
          console.log(`你点击的位置索引为${index},发送请求获得type为adList和likeList相应数据`)
        }
        // console.log(res.data.data);
      })
    },
    changeTab(item, index) {
      this.addData(index)
      // console.log(index);
    }
  }

}
</script>
<style scoped>
  .ly-tab{
    /*position: fixed;*/
    /*top:46px;*/
    /*left: 0;*/
    /*height: 40px;*/
  }
  ::v-deep .ly-tabbar{
    box-shadow: none;
  }
  ::v-deep .ly-tab-active-bar{
    background-color: #b0352f;
    color: #00B7FF;
  }
  .headers{
    width: 100%;
    height: 80px;
  }
  .header-main{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .home{
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

  }
  section{
    margin-top: 9px;
    flex: 1;
    overflow: hidden;
  }
</style>
