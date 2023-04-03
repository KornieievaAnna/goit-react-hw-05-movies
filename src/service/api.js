import axios from 'axios';

const API_KEY = 'ff340e70eb42d683311a67813670b4e7';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
};

export default async function getTrending() {
  const { data } = await axios.get(`/trending/all/day`);
  console.log(data.results);
  return data.results;
}

export async function getMovie(id) {
  const { data } = await axios.get(`/movie/${id}&language=en-US`);
  console.log(data);
  return data;
}

export async function getCredits(id) {
  const { data } = await axios.get(`/movie/${id}/credits&language=en-US`);
  console.log(data);
  return data.cast;
}

export async function getReviews(id) {
  const { data } = await axios.get(
    `/movie/${id}/reviews&language=en-US&page=1`
  );
  console.log(data);
  return data;
}

// ff340e70eb42d683311a67813670b4e7
