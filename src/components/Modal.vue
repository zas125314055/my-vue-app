<!-- src/components/Modal.vue -->
<template>
    <div class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <h2>这是一个模态窗口</h2>
        <p>你可以在这里添加任何内容。</p>
        <button @click="close">关闭</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    show: {
      type: Boolean,
      required: true
    }
  })
  
  const emit = defineEmits(['close'])
  
  const close = () => {
    emit('close')
  }
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
  }
  </style>
  