<script >
import FilmCard from './components/FilmCard.vue'
import SerieCard from './components/SerieCard.vue'
import AppHeader from './components/AppHeader.vue'


export default {
  name: "App",
  components: {
    AppHeader,
    FilmCard,
    SerieCard


  }
}


</script>

<template>
  <AppHeader />
  <FilmCard />
  <SerieCard />

</template>

<style  lang="scss" scoped>

</style>
