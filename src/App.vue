<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img alt="Xavi Fortes" class="yo" src="@/assets/yo-linkedin.jpeg" />
    <h1 class="green">Xavi Fortes</h1>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/skills">Skills</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
  <Transition name="fade" mode="out-in" appear>
    <RouterView />
  </Transition>
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  margin-right: auto;
}
header {
  line-height: 1.5;
  max-height: 20vh;
  padding: 1rem;
  margin-bottom: 1rem;
}

.yo {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 50%;
  width: 7%;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 3);
  }

  .yo {
    margin: 0 2rem 0 2rem;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1.1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
