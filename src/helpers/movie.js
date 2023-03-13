import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const API_KEY = 'a649aef4251ee3d0c9f3be5e6dab5f8d'
const route = useRoute()
const router = useRouter()

const getMovieDetails = async (id) => {
  const detailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  const { data } = await axios.get(detailUrl)
  return data
}

export { getMovieDetails }
