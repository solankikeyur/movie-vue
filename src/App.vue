<script setup>
import { useRoute } from 'vue-router';
import BaseLayout from './layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
      <router-view :key="useRoute().path"></router-view>
  </BaseLayout>
</template>
