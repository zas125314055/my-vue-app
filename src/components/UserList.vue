<!-- src/components/UserList.vue -->
<template>
    <div>
      <h2>用户列表</h2>
      <ul>
        <li v-for="user in users" :key="user.masterid">
          {{ user.masterid }} - {{ user.masternationality }} - {{ user.mastergender }} - {{ user.masterworktime }} - {{ user.unit_id }}
        </li>
      </ul>
  
      <h3>添加用户</h3>
      <form @submit.prevent="handleAddUser">
        <input v-model="newUser.masternationality" placeholder="Nationality" required />
        <input v-model="newUser.mastergender" placeholder="Gender" required />
        <input v-model="newUser.masterworktime" placeholder="Work Time" required />
        <input v-model="newUser.unit_id" placeholder="Unit ID" required />
        <button type="submit">添加</button>
      </form>
  
      <button @click="openModal">加载 Mastercad 数据</button>
  
      <!-- 使用 MastercadModal 组件 -->
      <MastercadModal v-if="isModalVisible" :records="mastercadRecords" @close="isModalVisible = false" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { getMastercad, addUser } from '../services/api';
  import MastercadModal from './MastercadModal.vue';
  
  const users = ref([]);
  const newUser = ref({
    masternationality: '',
    mastergender: '',
    masterworktime: '',
    unit_id: '',
  });
  const isModalVisible = ref(false);
  const mastercadRecords = ref([]);
  
  const fetchUsers = async () => {
    try {
      // 假设有一个不同的 API 来获取用户列表
      users.value = await getMastercad();
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleAddUser = async () => {
    try {
      await addUser(newUser.value);
      newUser.value = {
        masternationality: '',
        mastergender: '',
        masterworktime: '',
        unit_id: '',
      };
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };
  
  const openModal = async () => {
    try {
      mastercadRecords.value = await getMastercad();
      isModalVisible.value = true;
    } catch (error) {
      console.error(error);
    }
  };
  
  onMounted(() => {
    fetchUsers();
  });
  </script>
  
  <style scoped>
  /* 添加一些样式 */
  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  