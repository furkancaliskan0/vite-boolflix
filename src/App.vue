<script>
import axios from 'axios';
import FilmCard from './components/FilmCard.vue'
import { store } from './store.js';
export default {
  components: {
    FilmCard,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getMovies() {
      let myUrl = store.apiUrl;

      
      axios
        .get(myUrl)
        .then(res => {
          store.moviesList = res.data.results
        }
        )
    }
  },
  mounted() {
    this.getMovies();
  }
}
</script>

<template>
   <main>
    <FilmCard />
  </main>
</template>

<style lang="scss">
</style>