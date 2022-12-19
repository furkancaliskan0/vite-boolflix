<script>
import { store } from '../store.js';
//import SerieCard from "./SerieCard.vue"
export default {
  data() {
    return {
      store,
    }

  }
}
</script>

<template>
    <div v-for="movie in store.moviesList" :key="movie.id">
    <img :src="`https://image.tmdb.org/t/p/w400${movie.poster_path}`" alt="">
    <ul>
      <li>{{ movie.title }}</li>
      <li>{{ movie.original_title }}</li>
      <li>{{ movie.original_language }}</li>
      <li>{{ movie.vote_average }}</li>
  </ul>
  </div>
</template>

<style lang="scss" scoped>

li{
    color: black;
}


</style>