import axios from "axios";

const API_KEY = 'api_key=f7927898777439e99bb4df38c76e3b93'
const BASE_URL = 'https://api.themoviedb.org/3/'
const LANG = 'language=en-US'
export const IMG_PATH = 'https://image.tmdb.org/t/p/w500'

 export const getTrendsMovies = () => {
    return axios.get
    (`${BASE_URL}movie/popular?${API_KEY}&${LANG}&page=1`)
        .then(response => response.data)
 }


 export const getSearchMovies = (queryWord) => {
    return axios.get(`${BASE_URL}search/movie?${API_KEY}&${LANG}&query=${queryWord}&page=1&include_adult=true`)
        .then(response => response.data)
 }


export const getMovieById = (queryId) => {
    return axios.get(`${BASE_URL}movie/${queryId}?${API_KEY}&${LANG}`)
        .then(response => response.data)
}


export const getCastById = (queryId) => {
    return axios.get(`${BASE_URL}movie/${queryId}/credits?${API_KEY}&${LANG}`)
        .then(response => response.data.cast)
}


export const getReviewsById = (queryId) => {
    return axios.get(`${BASE_URL}movie/${queryId}/reviews?${API_KEY}&${LANG}`)
        .then(response => response.data.results)
}

