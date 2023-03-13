<template>
  <div class="px-4 pt-5 my-5 text-center border-bottom">
    <h1 class="display-4 fw-bold">Movie Vue</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">
        Movie Vue is an online database of information related to films, television series, podcasts, home videos, video games, and streaming content online – including cast, production crew and personal biographies, plot summaries, trivia, ratings, and fan and critical reviews.
      </p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <router-link :to="{name: 'home'}">
            <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Go to Home</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
