<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>Vue 3 初始化按钮示例</h1>
    <button @click="openModal">初始化</button>

    <!-- 使用 Modal 组件 -->
    <Modal v-if="isModalVisible" @close="isModalVisible = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from './components/Modal.vue'

const isModalVisible = ref(false)

const openModal = () => {
  isModalVisible.value = true
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
