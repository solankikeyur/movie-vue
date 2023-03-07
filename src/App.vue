<script setup>
import Navbar from './components/TheNavbar.vue'
import SearchBox from './components/SearchBox.vue'
import MovieList from './components/MovieList.vue'

import { computed, onMounted, ref, watchEffect } from 'vue'
import axios from 'axios'
import TheLoader from './components/TheLoader.vue'

const API_KEY = 'a649aef4251ee3d0c9f3be5e6dab5f8d'
const movies = ref([])
const loading = ref(false)
const searchVal = ref('')
const page = ref(1)
const totalPages = ref(1)

const updateSearchVal = (value) => {
  searchVal.value = value
  page.value = 1;
}

const backdropMovies = computed(() => {
  return movies.value.filter((movie) => movie.backdrop_path && movie.backdrop_path !== null);
})

const getTrendingMovies = () => {
  loading.value = true
  const URL = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&page=${page.value}`
  axios
    .get(URL)
    .then(({ data }) => {
      const results = data.results
      movies.value = results
      loading.value = false
      totalPages.value = data.total_pages;
      page.value = data.page;
    })
    .catch(() => {
      loading.value = false
    })
}

// onMounted(() => {
//   getTrendingMovies()
// })
watchEffect(() => {
  if (searchVal.value) {
    loading.value = true
    const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&page=${page.value}&query=${searchVal.value}`
    axios
      .get(searchUrl)
      .then(({ data }) => {
        const results = data.results
        movies.value = results
        loading.value = false
        totalPages.value = data.total_pages;
        page.value = data.page;
      })
      .catch(() => {
        loading.value = false
      })
  } else {
    getTrendingMovies();
  }
})

const nextPage = () => {
  if(page.value !== totalPages.value) {
    page.value++;
  }
}

const prevPage = () => {
  if(page.value !== 1) {
    page.value--;
  }
}

</script>

<template>
  <Navbar></Navbar>
  <SearchBox @update-search-val="updateSearchVal" :loading="loading"></SearchBox>
  <TheLoader v-if="loading"></TheLoader>
  <MovieList :currentPage="page" :lastPage="totalPages" v-else :movies="backdropMovies" :searchVal="searchVal"></MovieList>
  <div class="container">
    <button class="btn btn-secondary btn-lg float-start mb-4" @click="prevPage" :disabled="page === 1">PREV</button>
    <button class="btn btn-primary btn-lg float-end mb-4" :disabled="page === totalPages"  @click="nextPage">NEXT</button>
  </div>
</template>

<style>
body {
  background-color: #E7F6F2;
}

.btn-primary {
  background-color: #395B64;
  border-color: #395B64;
}
.btn-primary:hover {
  background-color: #A5C9CA;
  color: #395B64;
  border-color: #A5C9CA;
}
</style>
