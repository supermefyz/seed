<script setup>
import "xp.css/dist/XP.css";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Dialog from "@/components/Dialog.vue";
const router = useRouter();
const percent = ref(0);
const block = ref("|")
const show = ref(false)
const showDialog =ref(false)
setTimeout(() => {
const interval = setInterval(() => {
    percent.value += 5;
  block.value+="■■"
  if (percent.value === 100) {
      clearInterval(interval);
      setTimeout(() => {
          percent.value = 200;
          router.push("/home");
      }, 1000);
  }
}, 100);
}, 1000);
const props = defineProps(['show'])  
const emit = defineEmits(['update:show'])
const updateShow = () => {
    emit('update:show', false)
}
const openDialog = () => { 
    showDialog.value = true
}
const closeDialog = () => { 
    showDialog.value = false
}
</script>
<template>
    <div class="window" v-if="percent !== 200">
  <div class="title-bar" >
    <div class="title-bar-text">界面初始化</div>
    <div class="title-bar-controls">
      <button aria-label="Close" @click="updateShow"></button>
    </div>
  </div>
  <div class="window-body" >
    <pre>Microsoft&#10094;R&#10095; Windows DOS 
&#10094;C&#10095; Copyright Microsoft Corp 1990-2001.
      <br>
      C:&#92;WINDOWS&#92;SYSTEM32 > You can build a command line easily with a window and pre tag
      <br>
        loading in...
      <br>
      system init:{{ block }} &nbsp;&nbsp;{{ percent }}/100
    </pre>
  </div>
</div>
<div v-else class="window">
    <div class="title-bar">
        <div class="title-bar-text">谷子籽粒图像分隔</div>
        <div class="title-bar-controls">
          <button aria-label="Help"></button>
          <button aria-label="Close" @click="updateShow"></button>
        </div>
    </div>
    <div class="window-body">
        <div class="menu">
            <span class="menu-item" @click="openDialog">日志</span>
            <span class="menu-item">存档</span>
            <span class="menu-item" @click="$router.push('/home')">返回主界面</span>
            <span class="menu-item">缩放</span>
        </div>
        <div>
            <RouterView/>
            <Dialog v-show="showDialog" @click="closeDialog" />
        </div>
    </div>
</div>
</template>
<style scoped>
.window{
    width: 75%;
    margin-left: 10%;
}
.window-body{
    user-select: none;
}
.menu{
    height: 1.5rem;
    font-size: 13px;
    background-color: white;
    border-bottom:1px solid #8d8d8d;
}
.menu-item:first-child{
    margin-left:10px;
    padding-left:0 ;
}
.menu-item{
    border-right: 1px solid #8d8d8d;
    padding-left: 5px;
    padding-right:5px;
    line-height:1.5rem;
}
.menu-item:last-child{
    border-right:none;
}
.menu-item:hover{
    background-color: #f2f2f2;
}
.menu-item:active{
    background-color: #e6e6e6;
}
</style>