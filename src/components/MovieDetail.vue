<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  movie: Object,
  emptyText: String
});
const movie = ref(props.movie);
const emptyText = 'N/A'

const generes = computed(() => {
  if (movie.value.genres) {
    const genereArr = movie.value.genres.map((genere) => {
      return genere.name
    })
    return genereArr.join(', ')
  }
  return emptyText
})

const productionCompanies = computed(() => {
  if (movie.value.production_companies) {
    const companyArr = movie.value.production_companies.map((company) => {
      return company.name
    })
    return companyArr.join(', ')
  }
  return emptyText
})
const router = useRouter();
</script>
<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title h1">{{ movie.original_title || emptyText }}</div>
      <div class="card-text">
        {{ movie.overview || emptyText }}
      </div>

      <div class="card mt-4 details">
        <div class="card-body">
          <table class="table table-bordered">
            <tr>
              <td>Genres</td>
              <td>{{ generes ? generes : emptyText }}</td>
            </tr>
            <tr>
              <td>Popularity</td>
              <td>{{ movie.popularity ? movie.popularity.toFixed(0) : emptyText }}</td>
            </tr>
            <tr>
              <td>Release Date</td>
              <td>{{ movie.release_date || emptyText }}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{{ movie.status || emptyText }}</td>
            </tr>
            <tr>
              <td>Vote Average</td>
              <td>{{ movie.vote_average || emptyText }}</td>
            </tr>
            <tr>
              <td>Production Companies</td>
              <td>{{ productionCompanies || emptyText }}</td>
            </tr>
          </table>
        </div>
      </div>

      <button @click="router.back()" class="btn btn-lg btn-primary form-control mt-4">
        Go Back
      </button>
    </div>
  </div>
</template>
