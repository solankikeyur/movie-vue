<script setup>
defineProps({
  movie: Object
})
const imageUrl = `https://www.themoviedb.org/t/p/w440_and_h660_face/`;

</script>
<template>
  <div class="card" style="width: 18rem" v-if="movie.backdrop_path">
    <img class="card-img-top" :src="imageUrl + movie.backdrop_path" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title text-center" v-if="movie.name">{{ movie.name }}</h5>
      <h5 class="card-title text-center" v-else-if="movie.title">{{ movie.title }}</h5>
    </div>
  </div>
</template>

<style>
.card {
  background-color: #2C3333;
  margin: auto;
}
.card-title {
  color: #E7F6F2;
}
</style>