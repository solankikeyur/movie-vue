<script setup>
import { ref } from 'vue';
defineProps({
    loading: Boolean
})
const emit = defineEmits(["updateSearchVal"]);
const searchVal = ref("");
</script>
<template>
    <div class="container mt-4">
        <div class="form-group">
            <input class="form-control" v-model="searchVal" placeholder="Enter movie name..."  />
        </div>
        <div class="form-group mt-2">
            <button class="btn btn-primary" :disabled="loading" @click="emit('updateSearchVal', searchVal)">Search</button>
        </div>
    </div>
</template>