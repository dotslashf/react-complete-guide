import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    Authorization: 'My auth token from instance 2',
  },
});

export default instance;
