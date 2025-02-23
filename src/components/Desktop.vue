<script setup>
import { ref } from 'vue'
import Windows from '@/components/Windows.vue'
import screenfull from "screenfull";
const time = ref("")
const select = ref([false, false, false, false])
const selectId=ref(null)
const imgPath = "/imgs/"
const showWindows = ref(false)
const iconShow = ref(true)
const param = [
    { name: "我的电脑", img: "cs-display.png" },
    { name: "共享文件", img: "shared folder.png" },
    { name: "回收站", img: "recycle-bin.webp" },
    { name: "谷子籽粒图像分隔", img: "preferences-system-windows.png" }
]
setInterval(() => {
    iconShow.value = !iconShow.value
}, 700);
setInterval(() => {
    let t = new Date().toLocaleTimeString()
    let [h, m, _] = t.split(':')
    if (h > 12) {
        h = h - 12
        t = `${h}:${m} PM`
    } else {
        t = `${h}:${m} AM`
    }
    time.value = t
}, 1000)

const selectChange = (index) => {
    if (selectId.value === index)
        return
    selectId.value = index
    select.value[index] = true
    for (let i = 0; i < select.value.length; i++) {
        if (i !== index) {
            select.value[i] = false
        }
    }
}
const selectClear = (id, event) => {
   
    if (id=== null) {
        return
    }
    select.value[id] = false
    selectId.value = null
    event.stopPropagation()
}
const openWindow = (index,event) => {
    if (index === 3) {
        showWindows.value = true
    }
    selectId.value = null
    event.stopPropagation()
}
</script>
<template>  
    <div class="desktop" >
        <div class="container">
            <div class="app"  
            @click="selectChange(index)" 
            @dblclick="openWindow(index)"
            v-for="(item, index) in param" 
            :key="index"
            :class="{'border': select[index]}"
            >
                <img v-bind:src="imgPath + item.img"/>
                <div class="app-name">{{ item.name }}</div>
            </div>
        </div>
        <div class="windows" @click="selectClear(selectId)" @dblclick="screenfull.toggle()">
            <Windows v-if="showWindows" style="margin-top: 5%;"v-model:show="showWindows"/>
        </div>
    <footer>
           <div class="bottom-bar">
               <span class="start-btn" ></span>
               <span class="right-bar">
                   <img class="icon" src="@/assets/imgs/megaphone.png" />
                   <img class="icon dialog-icon" src="@/assets/imgs/dialog-information.png" v-show="iconShow" />
                   <span class="time">{{ time }}</span>
               </span>
           </div>
       </footer>
       </div>
</template>
<style scoped>
    .desktop {
        height: 100vh;
        width: 100%;
        background-image: url("@/assets/imgs/windows-xp-bliss-4k-lu.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        position:fixed;
    }
    .app{
        width: 60px;
        height: 80px;
        /* opacity: 0.5; */
        margin-top: 5px;
        margin-left: 5px;
        user-select: none;
        /* background-color: #fff; */
    }
    .border{
        border: 1px dotted #fff !important;
    }
    .container img{
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 60px;
        height: 60px;
        margin-top:0;
        
    }
    .container{
        float: left;
    }
    .windows{
        float:left;
        width: 95.74%;
        height: 100%;
        /* background-color: rgba(0,0,0,0.5); */
    }
    .app-name{
        font-size: 13px;
        font-weight: lighter;
        color: #ffffff;
        text-align: center;
        font-family:  Tahoma, "Noto Sans", sans-serif;
        text-shadow: black 0px 1px 1px;
        opacity: 0.9;
        user-select: none;
    }
    .bottom-bar {
        position: absolute;
        bottom:0;
        left:0;
        width:100%;
        height:35px;
        background:linear-gradient(rgb(31, 47, 134) 0px, rgb(49, 101, 196) 3%, rgb(54, 130, 229) 6%, rgb(68, 144, 230) 10%, rgb(56, 131, 229) 12%, rgb(43, 113, 224) 15%, rgb(38, 99, 218) 18%, rgb(35, 91, 214) 20%, rgb(34, 88, 213) 23%, rgb(33, 87, 214) 38%, rgb(36, 93, 219) 54%, rgb(37, 98, 223) 86%, rgb(36, 95, 220) 89%, rgb(33, 88, 212) 92%, rgb(29, 78, 192) 95%, rgb(25, 65, 165) 98%);
        display:flex;
        justify-content:space-between;
        align-items:center;
        color:#fff;
        font-size:14px;
    }
    .start-btn{
        background-image: url("@/assets/imgs/start.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 120px;
        height: 35px;
        cursor: pointer;
    }
    /* .start-btn:hover{
        
    } */
     .right-bar{
        width: 150px;
        height: 35px;
        background: linear-gradient(rgb(12, 89, 185) 1%, rgb(19, 158, 233) 6%, rgb(24, 181, 242) 10%, rgb(19, 155, 235) 14%, rgb(18, 144, 232) 19%, rgb(13, 141, 234) 63%, rgb(13, 159, 241) 81%, rgb(15, 158, 237) 88%, rgb(17, 155, 233) 91%, rgb(19, 146, 226) 94%, rgb(19, 126, 215) 97%, rgb(9, 91, 201) 100%);
     }
     .time{
        color:#fff;
        font-size:14px;
        line-height:35px;
        position:absolute;
        top: 2px;
        font-weight: lighter;
        right:20px;
        text-align:right;
        font-family: Tahoma, "Noto Sans", sans-serif;
        user-select: none;

     }

     .icon{
         width: 20px;
        height: 20px;
        cursor: pointer;
        line-height: 35px;
        margin-top: 9px;
        margin-left:10px;
     }
     .dialog-icon{
        margin-left: 5px;
     }

</style>