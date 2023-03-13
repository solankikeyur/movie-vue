<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import TheLoader from '../components/TheLoader.vue'
import MovieDetail from '../components/MovieDetail.vue'
import MovieSimilar from "../components/MovieSimilar.vue"

const { id } = useRoute().params
const API_KEY = 'a649aef4251ee3d0c9f3be5e6dab5f8d'
const movie = ref(null)
const loading = ref(true)
const imageUrl = `https://www.themoviedb.org/t/p/w440_and_h660_face/`
const router = useRouter()
const route = useRoute()

onMounted(() => {
  const detailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  axios
    .get(detailUrl)
    .then(({ data }) => {
      loading.value = false
      movie.value = data
    })
    .catch((errors) => {
      router.push({
        name: 'NotFound',
        // preserve current path and remove the first char to avoid the target URL starting with `//`
        params: { pathMatch: route.path.substring(1).split('/') },
        // preserve existing query and hash if any
        query: route.query,
        hash: route.hash
      })
      console.log(errors)
    })
 
})
</script>
<template>
  <TheLoader v-if="loading"></TheLoader>
  <div class="container mt-4 mb-4" v-else>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-5 col-12">
            <img class="movie-image" :src="imageUrl + movie.backdrop_path" />
          </div>
          <div class="col-md-7 col-12">
            <MovieDetail :movie="movie"></MovieDetail>
          </div>
        </div>

        <MovieSimilar :id="id"></MovieSimilar>

      </div>
    </div>
  </div>
</template>

<style>
.card-text {
  color: white;
}
.table {
  color: white;
}
.details {
  background-color: #395b64 !important;
}
.table tr td {
  padding: 15px !important;
}
</style>
