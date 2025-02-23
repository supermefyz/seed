<script setup>
</script>
<template>
<h4>3d模型页面</h4>
<div class="container">

</div>
 <button class="btn" @click="$router.back()">上一步</button>
   <button class="btn" @click="$router.push('/3DModule')" style="float: right;">下一步</button>
</template>
<style scoped>
.container {
    width: 99%;
    height: 65vh;
    border: 1px solid #ccc;
}

</style>
