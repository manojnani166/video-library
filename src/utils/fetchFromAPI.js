import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
     part: 'snippet',
      videoId: 'M7FIvfx5J10',
      maxResults: 50,
    },
  headers: {
    'X-RapidAPI-Key': 'f89dd4018bmshd6dd4fed9d2b3f2p19885fjsn9e0e63c0103c',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};