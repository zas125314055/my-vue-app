// src/services/api.js

import axios from 'axios';

// 定义 API 基础 URL（根据你的部署情况调整）
const API_BASE_URL = '/api/getMastercad'; // Cloudflare Pages Functions 的相对路径

// 获取 mastercad 数据
export const getMastercad = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching mastercad data:', error);
    throw error;
  }
};

// 添加新用户
export const addUser = async (user) => {
  try {
    const response = await axios.post(API_BASE_URL, user);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};
