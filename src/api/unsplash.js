import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID pPYu4RpxH3SB5h0DJbbKJO0olD9fIwNW4Lejnq23DQQ'
  }
});