<script>
import { store } from '../store.js';
export default {
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <header>
    <div class="container">
      <h1>Boolflix</h1>

      <div class="search-holder">
        <input type="search" placeholder="" v-model="store.searchText">
        <button type="submit" @click.prevent="$emit('search')">
          Search
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;
.container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  h1 {
    color: $background;
  }
}
</style>