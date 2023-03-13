<script setup>
import { onMounted, ref, computed } from 'vue'
import axios from 'axios'
import MovieItem from './MovieItem.vue'
import TheLoader from './TheLoader.vue'

const { id } = defineProps({
  id: String
})
const loading = ref(true)
const API_KEY = 'a649aef4251ee3d0c9f3be5e6dab5f8d'
const movies = ref([])

const backdropMovies = computed(() => {
  return movies.value.filter((movie) => movie.backdrop_path && movie.backdrop_path !== null)
})

onMounted(() => {
  const detailUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`
  axios
    .get(detailUrl)
    .then(({ data }) => {
      loading.value = false
      movies.value = data.results
    })
    .catch((errors) => {
      console.log(errors)
      loading.value = false
    })
})
</script>

<template>
  <TheLoader v-if="loading"></TheLoader>
  <div class="card mt-4" v-if="movies.length > 0 && !loading">
    <div class="card-title h3">Similar Movies</div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-3 col-12 col-lg-3 mb-4" v-for="movie in backdropMovies" :key="movie.id">
          <MovieItem :movie="movie"></MovieItem>
        </div>
      </div>
    </div>
  </div>
</template>
