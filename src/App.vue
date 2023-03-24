<script>
import axios from 'axios';
import FilmCard from './components/FilmCard.vue'
import AppHeader from './components/AppHeader.vue';
import { store } from './store.js';

export default {
  components: {
    FilmCard,
    AppHeader
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getMovies() {
      let myUrl = store.moviesAPI;

        if (store.searchText !== '') {
          myUrl = `https://api.themoviedb.org/3/search/movie?api_key=58f2df07dfea14b2ec249e535f5ee506&query=${store.searchText}`
        }

     // per connettersi all api 
      axios
        .get(myUrl)
        .then(res => {
          store.moviesList = res.data.results
        }
        )
    }
  },
  getTv() {
      let myUrl = store.tvAPI;
      if (store.searchText !== '') {
        myUrl = `https://api.themoviedb.org/3/search/tv?api_key=6fd82c7e095558dcca8a44519f3dc58a&query=${store.searchText}`
      }
      axios
        .get(myUrl)
        .then(res => {
          store.tvList = res.data.results
        }
        )
    },
    searchBoth() {
      this.getMovies()
      this.getTv()
    },
  mounted() {
    this.getMovies();
  }
}
</script>

<template>
    <AppHeader @search="getMovies" />
   <main>
    <FilmCard />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;


h4{
  color: white;
}
</style>