<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>Vue 3 + Cloudflare D1 示例</h1>
    <UserList />
  </div>
</template>

<script setup>
import UserList from './components/UserList.vue';
</script>

<style>
/* 添加全局样式 */
#app {
  text-align: center;
  margin-top: 50px;
}
</style>
