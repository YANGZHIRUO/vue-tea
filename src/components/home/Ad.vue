<template>
<div class="ad">
  <ul>
    <li v-for="(item,index) in adList" >
      <img :key="index" :src="item.imgUrl" alt="">
    </li>
  </ul>

</div>
</template>

<script>
export default {
  name: "Ad",
  props:{
    adList:Array
  }
}
</script>

<style scoped>
  .ad{
    width: 100%;
    /*height: 112px;*/
    /*background-color: #00B7FF;*/
  }
  .ad img{
    width: 100%;
    height: 100%;
  }
</style>