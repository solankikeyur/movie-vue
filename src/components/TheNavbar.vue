<script setup>
import NavbarLogo from '../assets/logo.png'
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">
        <img :src="NavbarLogo" width="200" />
      </span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav nav nav-pills">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  background-color: #2c3333 !important;
}
.navbar-brand {
  color: #e7f6f2 !important;
}

.nav-link {
  color: white;
  margin-left: 20px;
}

.nav-link.active {
  /* border: solid 1px white; */
  color: #395b64!important;
  background-color: #e7f6f2!important;
}
</style>
