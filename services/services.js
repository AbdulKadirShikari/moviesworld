import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=bb566214eb34f304a99872281a45b060';
//Get Popular Movies
export const getPopularMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};

//Get Upcoming Movies
export const getUpComingMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};

//Get Popular Tv
export const getPopularTv = async () => {
  const resp = await axios.get(`${apiUrl}/tv/popular?${apiKey}`);
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get Family Movies
export const getFamilyMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=10751`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get Action Movies
export const getActionMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=28`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get Adventure Movies
export const getAdventureMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=12`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get Animation Movies
export const getAnimationMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=16`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get Comedy Movies
export const getComedyMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=35`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get Crime Movies
export const getCrimeMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=80`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get Documentary Movies
export const getDocumentaryMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=99`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get Drama Movies
export const getDramaMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=18`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get Fantasy Movies
export const getFantasyMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=14`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get History Movies
export const getHistoryMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=14`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get Horror Movies
export const getHorrorMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=27`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};

//Get Music Movies
export const getMusicMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=10402`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get Mystery Movies
export const getMysteryMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=9648`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get Romance Movies
export const getRomanceMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=10749`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get Science Fiction Movies
export const getScienceFictionMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=878`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get TV Movie Movies
export const getTVMovieMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=10770`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get Thriller Movies
export const getThrillerMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=53`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get War Movies
export const getWarMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=10752`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get Western Movies
export const getWesternMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=37`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
//Get ditail Movies
export const getMovie = async id => {
  const resp = await axios.get(`${apiUrl}/movie/${id}?${apiKey}`);
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data;
};
//Search for Movie or TV by keyword
export const searchMovieTv = async (query, type) => {
  const resp = await axios.get(
    `${apiUrl}/search/${type}?${apiKey}&query=${query}`,
  );
  // console.log(JSON.stringify(resp.data.results[1], null, 2));
  return resp.data.results;
};
