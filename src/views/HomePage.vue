    <script setup>

    </script>
<template>
    <div>
        <h4>请选择图片</h4>
        <div class="image-container">

        </div>
        <button type="file" @change="handleFileChange" class="btn ">
            点击上传
        </button>
        <button class="btn" @click="$router.push('/result')"> 开始处理</button>
    </div>
</template>
<style>
    .image-container {
        width: 90%;
        height: 65vh;
        border: 1px solid black;
    }
    .btn{
        margin-top: 20px;
    }
    .btn:last-child{
        margin-left: 30px;
    }
</style>