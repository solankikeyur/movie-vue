<script setup>
import TheNavbar from '../components/TheNavbar.vue';
</script>

<template>
    <TheNavbar></TheNavbar>
    <slot></slot>
</template>
<style>
body {
  background-color: #e7f6f2;
}

.btn-primary {
  background-color: #395b64;
  border-color: #395b64;
}
.btn-primary:hover {
  background-color: #a5c9ca;
  color: #395b64;
  border-color: #a5c9ca;
}
.card {
  background-color: #2c3333;
  margin: auto;
}
.card-title {
  color: #e7f6f2;
}
</style>
