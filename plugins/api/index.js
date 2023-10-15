import axios from 'axios';

export default ({ app }, inject) => {
  const apiClient = axios.create({
    baseURL: 'http://localhost:8888', // Replace with your API endpoint
    timeout: 5000, // Adjust the timeout as needed
  });

  inject('axios', apiClient);
};
