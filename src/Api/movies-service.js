import axios from 'axios';

const API_KEY = '1c4a98afb2f80cbf9a0f0f59d5b0ab2a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// Отримання популярних фільмів за день
export async function getDataFromApiTrending() {
  try {
    const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// Отримання картки по пошуку в інпуті
export async function getDataFromApiSearchByName(value) {
  try {
    const { data } = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${value}&language=en-US&page=1&include_adult=false`
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// Отримання деталі про картку по "id"
export async function getDataFromApiMovieDetails(id) {
  try {
    const { data } = await axios.get(`movie/${id}?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// Отримання список акторів
export async function getDataFromApiActorInfo(id) {
  try {
    const { data } = await axios.get(
      `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// Отримання відгуків
export async function getDataFromApiReviews(id) {
  try {
    const { data } = await axios.get(
      `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
