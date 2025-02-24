<script setup>
import { ref } from 'vue'
const result = ref([
    { part: '胚', value: 100, picture: null },
    { part: '胚乳', value: 200, picture: null },
    { part: '内颖壳', value: 300, picture: null },
    { part: '外颖壳', value: 400, picture: null },
    {part:'颖壳', value: 500, picture: null}
])
</script>
<template>
    <h4>结果页面</h4>
<div class="result">
    <div class="gallery">
        <div class="picture" v-for="item in result" :key="item">
            <div class="img"></div>
            <div class="name">{{ item.part }}</div>
        </div>
    </div>
   <div class="text">
    <P>分割结果</P>
    <p v-for="item in result">
        {{ item.part }}：{{ item.value }}
    </p>
   </div>
   <button class="btn" @click="$router.back()">上一步</button>
   <button class="btn" @click="$router.push('/3DModule')" style="float: right;">下一步</button>
</div>
</template>
<style scoped>
.result {
    width: 100%;
    height: 66.5vh;
    /* border:1px solid #ccc; */
    /* padding-left: 10px; */
}
.gallery {
    margin-top:3%;
    width: 99%;
    height: 55%;
}
.picture {
    border:1px solid #ccc;
    width:19.2%;
    height:90%;
    float:left;
    margin-right:10px;
    margin-top:1%;
}
.picture:last-child{
    margin-right: 0;
}
.text{
    width: 99%;
    height: 22vh;
    border:1px solid #ccc;
    font-size: 15px;
    padding: 10px;
}
.btn{
    margin-top: 34px;
    margin-right:5px;
}
</style>