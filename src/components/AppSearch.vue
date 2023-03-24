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

   <div id=" input-group mx-3 flex-nowrap">

    <input type="text" name="" id="input-search"  v-model="store.searchText">
    <button class="btn btn-danger" @click="$emit('search')">
        Search
    </button>
   </div>



</template>

<style  lang="scss"  >

.input-group{
    min-width: 40vh;
}

</style>