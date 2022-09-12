<template>
  <div class="like">
    <Card>
        <h1>猜你喜欢</h1>
    </Card>
   <ul>
     <li v-for="(item,index) in likeList" :key="index">
       <h2>
         <img :src="item.imgUrl" alt="">
<!--         {{item.imgUrl}}-->
       </h2>
       <h3>{{item.name}}</h3>
       <div>
         <span>$</span>
         <b>{{item.price}}</b>
       </div>
     </li>
   </ul>
  </div>
</template>

<script>
import Card from "@/components/home/Card.vue"
export default {
  name: "Like",
  props:{
    likeList:Array
  },
  data(){
    return{
      // likeList:[
      //   {id:1,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999},
      //   {id:2,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999},
      //   {id:3,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999}
      // ]
    }
  },
  components:{
    Card
  }
}
</script>

<style scoped>
.like ul{
  display: flex;
  flex-wrap: wrap;
}
.like ul li{
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.like img{
  width: 176px;
  height: 176px;
}
.like h3{
  width: 90%;
  font-size: 12px;
  color: #222;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap ;
  /*font-weight: 400;*/
  padding: 6px;
}
.like ul li>div{
  width: 90%;
  padding: 6px;
  /*text-align: left;*/
}
.like ul li div span{
  font-size: 12px;
}
b{
  color: red;
}
</style>