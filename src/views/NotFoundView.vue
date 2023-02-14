<template>
  <h1>Page Not Found</h1>
  <p>Sorry, the page you are looking for does not exist.</p>
  <p>Go back to <router-link to="/">Home</router-link></p>
</template>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Inconsolata";

* {
  font-family: "Inconsolata", monospace;
}

h1 {
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}

p:last-of-type {
  margin-bottom: 0;
}

a {
  color: var(--color-text);
  text-decoration: underline;
}
</style>
