<script setup>
import SearchBox from '../components/SearchBox.vue'
import MovieList from '../components/MovieList.vue'

import { computed, ref, watchEffect } from 'vue'
import axios from 'axios'
import TheLoader from '../components/TheLoader.vue'

const API_KEY = 'a649aef4251ee3d0c9f3be5e6dab5f8d'
const movies = ref([])
const loading = ref(false)
const searchVal = ref(localStorage.getItem('search') || '');
const page = ref(localStorage.getItem("page") || 1);
const totalPages = ref(1)

const updateSearchVal = (value) => {
  searchVal.value = value
  page.value = 1
  setPage();
  localStorage.setItem("search", value);
}

const backdropMovies = computed(() => {
  return movies.value.filter((movie) => movie.backdrop_path && movie.backdrop_path !== null)
})

const getTrendingMovies = () => {
  loading.value = true
  const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page.value}`
  axios
    .get(URL)
    .then(({ data }) => {
      const results = data.results
      movies.value = results
      loading.value = false
      totalPages.value = data.total_pages
      page.value = data.page
    })
    .catch(() => {
      loading.value = false
    })
}
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
        totalPages.value = data.total_pages
        page.value = data.page
      })
      .catch(() => {
        loading.value = false
      })
  } else {
    getTrendingMovies()
  }
})

const nextPage = () => {
  if (page.value !== totalPages.value) {
    page.value++
  }
  setPage();
}

const prevPage = () => {
  if (page.value !== 1) {
    page.value--
  }
  setPage();
}

const setPage = () => {
  localStorage.setItem("page", page.value);
}

</script>

<template>
  <SearchBox @update-search-val="updateSearchVal" :loading="loading"></SearchBox>
  <TheLoader v-if="loading"></TheLoader>
  <MovieList
    :currentPage="page"
    :lastPage="totalPages"
    v-else
    :movies="backdropMovies"
    :searchVal="searchVal"
  ></MovieList>
  <div class="container">
    <button
      class="btn btn-secondary btn-lg float-start mb-4"
      @click="prevPage"
      :disabled="page === 1"
    >
      PREV
    </button>
    <button
      class="btn btn-primary btn-lg float-end mb-4"
      :disabled="page === totalPages"
      @click="nextPage"
    >
      NEXT
    </button>
  </div>
</template>

