<script setup>

</script>
<template>
    <div class="window" style="width: 320px">
  <div class="title-bar">
    <div class="title-bar-text">A Window With A Status Bar</div>
  </div>
  <div class="window-body">
<p> There are just so many possibilities:</p>
<ul>
    <li>A Task Manager</li>
    <li>A Notepad</li>
    <li>Or even a File Explorer!</li>
</ul>
  </div>
  <div class="status-bar">
    <p class="status-bar-field">Press F1 for help</p>
    <p class="status-bar-field">Slide 1</p>
    <p class="status-bar-field">CPU Usage: 14%</p>
  </div>
</div>
</template>
<style scoped>
    .window {
        position:fixed;
        z-index: 1000;
    }
</style>