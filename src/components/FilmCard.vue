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
  <div class="container">
    <div class="film" v-for="movie in store.moviesList" :key="movie.id">
      <img :src="`https://image.tmdb.org/t/p/w400${movie.poster_path}`" alt="">
      <h4>{{ movie.title }}</h4>
      <h4>{{ movie.original_title }}</h4>
      <h4>
        {{movie.original_language}}
      </h4>
      <h4>{{ movie.vote_average }}</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;

h4{
    color: black;
}
.film {
  color: $text;
  margin: 20px;
  width: 185px;
}


</style>