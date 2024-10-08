// src/services/api.js

import axios from 'axios';

const API_BASE_URL = '/api/getMastercad'; // Pages Functions 的相对路径

export const getMastercad = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching mastercad data:', error);
    throw error;
  }
};
