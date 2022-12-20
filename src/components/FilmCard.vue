<script>
import { store } from '../store.js';
//import SerieCard from "./SerieCard.vue"
export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    displayLanguage(language) {
      if (language === 'en') {
        return '<img class="flag" src="https://flagcdn.com/w20/gb.png" alt="" />';
      }
      else if (language === 'br') {
        return '<img class="flag" src="https://flagcdn.com/w20/br.png" alt="" />';
      }
      else if (language === 'hu') {
        return '<img class="flag" src="https://flagcdn.com/w20/hu.png" alt="" />';
      }
      else if (language === 'be') {
        return '<img class="flag" src="https://flagcdn.com/w20/be.png" alt="" />';
      }
      else if (language === 'pl') {
        return '<img class="flag" src="https://flagcdn.com/w20/pl.png" alt="" />';
      }
      else if (language === 'no') {
        return '<img class="flag" src="https://flagcdn.com/w20/no.png" alt="" />';
      }
      else if (language === 'is') {
        return '<img class="flag" src="https://flagcdn.com/w20/is.png" alt="" />';
      }
      else if (language === 'es') {
        return '<img class="flag" src="https://flagcdn.com/w20/es.png" alt="" />';
      }
      else if (language === 'ru') {
        return '<img class="flag" src="https://flagcdn.com/w20/ru.png" alt="" />';
      }
      else if (language === 'fr') {
        return '<img class="flag" src="https://flagcdn.com/w20/fr.png" alt="" />';
      }
      else if (language === 'it') {
        return '<img class="flag" src="https://flagcdn.com/w20/it.png" alt="" />';
      }
      else if (language === 'ja') {
        return '<img class="flag" src="https://flagcdn.com/w20/jp.png" alt="" />';
      }
      else if (language === 'da') {
        return '<img class="flag" src="https://flagcdn.com/w20/da.png" alt="" />';
      }
      else {
        return language;
      }
    }


  }
}
</script>

<template>
   <div class="container">
    <div class="card" v-for="movie in store.moviesList" :key="movie.id">
      <img :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`" alt="">
      <h4>{{ movie.title }}</h4>
      <h4>{{ movie.original_title }}</h4>
      <h5 :innerHTML="displayLanguage(movie.original_language)">
      </h5>
      <h3>{{ movie.vote_average }}&#9733</h3>
    </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;

h3{
  color: yellow;
}
</style>