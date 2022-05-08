import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "fe6dc393810702cab99031f1eed25696";

//--список самых популярных фильмов--//
export async function fetchTrendingMovies() {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return response.data.results;
}
//--поиск кинофильма по ключевому слову--//
export async function fetchMoviesSearch(searchQuery) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
  return response.data.results;
}
//--полная информация о фильме--//
export async function fetchMoviesById(id) {
  const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return response.data;
}
//--информация о актёрском составе--//
export async function fetchMoviesCast(id) {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
}
//--запрос обзоров для страницы кинофильма--//
export async function fetchReviews(id) {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
}
