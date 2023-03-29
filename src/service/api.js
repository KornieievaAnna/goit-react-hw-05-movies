import axios from 'axios';


const API_KEY = 'ff340e70eb42d683311a67813670b4e7';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  api_key: API_KEY,
};

export async function getTrending() {
  const { data } = await axios.get(`/trending/all/day`);
  console.log(data.results);  
  return data.results;
}


// ff340e70eb42d683311a67813670b4e7




// https://api.themoviedb.org/3/trending/movie/day?api_key=ff340e70eb42d683311a67813670b4e7