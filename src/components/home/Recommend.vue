<template>
<div class="recommend">
 <Card>
 </Card>
  <ul>
    <li v-for="(item,index) in recommendList" :key="index">
      <h2>
        <img :src="item.imgUrl" alt="">
      </h2>
      <div>
          <h3>{{item.name}}</h3>
          <p>{{item.content}}</p>
        <div class="price">
          <span>$</span>
          <b>{{item.price}}</b>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import Card from "@/components/home/Card.vue"
export default {
  name: "Recommend",
  props:{
    recommendList:Array
  },
  components:{
    Card
  },
  data(){
    return{
      // recommendList:[
      //   {id:1,name:"龙井號铁罐250g",content:"鲜爽甘美，口味很好",price:68,imgUrl:"./images/recommend.jpeg"},
      //   {id:1,name:"龙井號铁罐250g",content:"鲜爽甘美，口味很好",price:68,imgUrl:"./images/recommend.jpeg"},
      // ]
    }
  }
}
</script>

<style scoped>
.recommend ul li{
  position: relative;
}
  .recommend ul li > div{
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    /*align-items: center;*/
    padding: 20px;
    text-align: right;
  }
  .recommend ul li img{
    width: 380px;
    height: 150px;
    border-radius: 12px;
  }
  ul li h2{
    text-align: center;
  }
.recommend ul li > div h3{
  font-size: 12px;
}
.recommend ul li > div p{
  font-size: 16px;
}
.price span{
  font-size: 16px;
  color: red;
}
b{
  font-size: 20px;
  color: red;
}



</style>