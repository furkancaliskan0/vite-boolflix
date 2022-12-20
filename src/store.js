import { reactive } from 'vue';

export const store = reactive({
    movieList: [],
    apiUrl:"https://api.themoviedb.org/3/movie/popular?api_key=58f2df07dfea14b2ec249e535f5ee506&page=1",
    searchText:"",
});