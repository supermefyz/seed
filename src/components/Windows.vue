<script setup>
import "xp.css/dist/XP.css";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const percent = ref(0);
const block = ref("|")
const show = ref(false)
setTimeout(() => {
const interval = setInterval(() => {
    percent.value += 10;
  block.value+="■"
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
        <div>
            <RouterView/>
        </div>
        
    </div>
</div>
</template>
<style scoped>
.window{
    width: 75%;
    margin-left: 10%;
}
</style>