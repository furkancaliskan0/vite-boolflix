import { reactive } from 'vue';

export const store = reactive({
    characterList: [],
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=58f2df07dfea14b2ec249e535f5ee506",
    
});