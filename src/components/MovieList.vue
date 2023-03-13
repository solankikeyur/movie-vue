<script setup>
import MovieItem from './MovieItem.vue'

defineProps({
  movies: Array,
  searchVal: String,
  currentPage: Number,
  lastPage: Number
})
</script>
<template>
  <div class="container mt-4">
    <div class="row mb-2">
      <div class="col-12" v-if="searchVal">
        <h3>Search result for "{{ searchVal }}"</h3>
        <h5>Page {{ currentPage }} of {{ lastPage }}</h5>
      </div>
      <div class="col-12" v-else>
        <h3>Trending This Week</h3>
      </div>
    </div>
    <div class="row" v-if="movies.length > 0">
      <div class="col-md-3 col-12 col-lg-3 mb-4" v-for="movie in movies" :key="movie.id">
          <MovieItem :movie="movie"></MovieItem>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-12">No records found.</div>
    </div>
  </div>
</template>

