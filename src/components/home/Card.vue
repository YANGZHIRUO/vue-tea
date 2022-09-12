<template>
  <div class="title">
    <span class="DAI1"></span>
    <slot>

        <h1>火爆推荐</h1>

    </slot>
    <span class="DAI2"></span>
  </div>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style scoped>
.title{
  width: 100%;
  text-align: center;
  font-size: 16px;
  padding: 15px 0;
  position: relative;
}
.DAI1{
  display: block;
  width: 8px;
  height: 8px;
  position: absolute;
  background: #d4c0a7;
  border-radius: 50%;
  top: 25px;
  left: 120px;
}
.DAI2{
  display: block;
  width: 8px;
  height: 8px;
  position: absolute;
  background: #d4c0a7;
  border-radius: 50%;
  top: 25px;
  right:120px;
}
h1{
  font-size: 20px;
}
</style>