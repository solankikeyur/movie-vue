<script setup>
defineProps({
  movie: Object
})
const imageUrl = `https://www.themoviedb.org/t/p/w440_and_h660_face/`
</script>
<template>
  <router-link :to="{name: 'detail', params:{id: movie.id}}">
    <div class="card" style="width: 15rem" v-if="movie.backdrop_path">
      <img class="card-img-top" :src="imageUrl + movie.backdrop_path" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title text-center" v-if="movie.name">{{ movie.name }}</h5>
        <h5 class="card-title text-center" v-else-if="movie.title">{{ movie.title }}</h5>
      </div>
    </div>
  </router-link>
</template>

<style>
.card {
  background-color: #2c3333;
  margin: auto;
}
.card-title {
  color: #e7f6f2;
}
a {
  text-decoration: none;
}
</style>
