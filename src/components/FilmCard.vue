<script>
import { store } from '../store.js';
//import SerieCard from "./SerieCard.vue"
export default {
  data() {
    return {
      active: {},
      store,
    }
  },
  methods: {
    // metodo per visualizzare bandiere in base alla lingua
    displayLanguage(language) {
      if (language === 'en') {
        return '<img class="flag" src="https://flagcdn.com/16x12/gb.png" alt="uk-flag" />';
      }
      else if (language === 'it') {
        return '<img class="flag" src="https://flagcdn.com/16x12/it.png" alt="it-flag" />';
      }
      else {
        return language;
      }
    },
    rating(voteAverage) {
      let vote = Math.round(voteAverage / 2);
      return vote;
    }
    }
  }
</script>

<template>
   <div class="container">
      <div class="card" v-for="movie in store.moviesList" :key="movie.id"  @mouseover="active[movie.id] = true"
      @mouseout="active[movie.id] = false">
        
        <img :src="movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'img.jpg'"
        :alt="movie.title">
        <div class="details" v-show="active[movie.id]">
          <h4>{{ movie.title }}</h4>
          <h4 v-if="movie.title != movie.original_title">Titolo originale: {{ movie.original_title }}</h4>

          <h5 :innerHTML="displayLanguage(movie.original_language)"></h5>

          <div class="rating">
          Voto:
          <!-- stampa stelle in base alla votazione -->
          <span v-for="star in rating(movie.vote_average)">&#9733;</span>
          <!-- stampa le rimanenti stelle vuote, facendo la differenza tra un intervallo di 5 numeri meno il voto arrotondato del metodo-->
          <span v-for="star in 5 - rating(movie.vote_average)">&#9734;</span>
          <h6>{{ movie.overview }}</h6>
        </div>
        </div>
      </div>
       <!-- array delle serie tv -->
      <div class="card" v-for="tv in store.tvList" :key="tv.id" @mouseover="active[tv.id] = true"
      @mouseout="active[tv.id] = false">
        <!-- immagine -->
        <img :src="tv.poster_path ? `https://image.tmdb.org/t/p/w300${tv.poster_path}` : 'img.jpg'"
        :alt="tv.name">
        <!-- titolo -->
        <div class="details" v-show="active[tv.id]">
        <!-- titolo -->
        <h4>Titolo: {{ tv.name }}</h4>

        <!-- mostra titolo originale se diverso da titolo -->
        <h4 v-if="tv.name != tv.original_name">Titolo originale: {{ tv.original_name }}</h4>

        <!-- condizione per bandiera o stringa lingua -->
        <h5 :innerHTML="displayLanguage(tv.original_language)">
        </h5>

        <!-- votazione serie -->
          <div class="rating">
            Voto:
            <span v-for="star in rating(tv.vote_average)">&#9733;</span>
            <span v-for="star in 5 - rating(tv.vote_average)">&#9734;</span>
          </div>

          <h6>{{ tv.overview }}</h6>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;

.container {
  margin-top: 50px;

  .card {
    cursor: pointer;
    position: relative;
    color: $text;
    width: 300px;
    

    img {
      width: 300px;
      height: 350px;
      object-fit: cover;
      text-align:center;
    }

    .details {
      padding: 10px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgb(255, 255, 255);
      color:$black;
      overflow-y: auto;
      text-align: center;

      h4,
      .rating {
        font-size: 1.30rem;
        margin-bottom: 20px;
        text-align: center;
        color:$black;
      }

      span {
        color: $yellow;
      }

      h6 {
        font-size: 1.20rem;
        font-weight: 100;
        text-align: center;
        color:$black;
      }
    }
  }

    h3{
      color: $yellow;
    }
  }
</style>