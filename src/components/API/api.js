import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const fetchData = async (page) => {
  try {
    console.log("action",api)
    const response = await api.get(`/data/page${page}.json`);
    return response.data.page['content-items'].content;
  } catch (error) {
    throw error;
  }
};