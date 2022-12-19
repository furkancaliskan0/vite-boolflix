<script>
    import { store } from '../store';
    export default{
        data() {
            return {
                store,
            }
        },
    }
</script>

<template>

   <div id="input-container">

    <input type="search" name="" id="input-search"  v-model="store.searchText">
    <button  @click="$emit('search')">
        Search
    </button>
   </div>



</template>

<style  lang="scss"  >

</style>