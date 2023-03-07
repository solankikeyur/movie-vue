<script setup>
import NavbarLogo from "../assets/logo.png";
</script>
<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">
        <img :src="NavbarLogo" width="200">
      </span>
    </div>
  </nav>
</template>

<style>
.navbar {
  background-color: #2C3333!important;
}
.navbar-brand {
  color: #E7F6F2!important;
  
}
</style>
