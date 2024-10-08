<!-- src/components/MastercadModal.vue -->
<template>
    <div class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <h2>Mastercad 数据</h2>
        <table>
          <thead>
            <tr>
              <th>Master ID</th>
              <th>Nationality</th>
              <th>Gender</th>
              <th>Work Time</th>
              <th>Unit ID</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="record in records" :key="record.masterid">
              <td>{{ record.masterid }}</td>
              <td>{{ record.masternationality }}</td>
              <td>{{ record.mastergender }}</td>
              <td>{{ record.masterworktime }}</td>
              <td>{{ record.unit_id }}</td>
            </tr>
          </tbody>
        </table>
        <button @click="close">关闭</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    show: {
      type: Boolean,
      required: true,
    },
    records: {
      type: Array,
      required: true,
    },
  });
  
  const emit = defineEmits(['close']);
  
  const close = () => {
    emit('close');
  };
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
    width: 80%;
    max-width: 800px;
    max-height: 80%;
    overflow-y: auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  