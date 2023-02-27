<template>
  <!-- <div data-text="Welcome"> -->
  <!-- <h1>Welcome</h1> -->
  <!-- </div> -->
  <div>
    <h1>Welcome</h1>
    <p>
      Welcome to my personal website! I'm a student and Junior DevOps Engineer,
      passionate about all things related to tech and development.
    </p>
    <p>
      This website was created using Vue.js and Vite, and is deployed on a
      Kubernetes cluster. It's maintained through continuous integration and
      deployment using GitHub Actions and ArgoCD, ensuring that any updates or
      changes are seamlessly deployed and available to visitors at all times.
    </p>
  </div>
  <footer>
    <p>
      Check out my LinkedIn profile
      <a href="https://www.linkedin.com/in/xavier-fortes/"> here</a>.
    </p>
    <p>
      Check out my GitHub profile
      <a href="https://github.com/xavifortes"> here</a>.
    </p>
    <p>
      Check out my deployments in Kubernetes
      <a href="https://uptime.karasu.es/status/k8s"> here</a>.
    </p>
  </footer>
</template>

<script lang="ts">
export default {
  name: "TheWelcome",
  data() {
    return {
      uptimeData: [
        {
          status: "",
          time: "",
          msg: "",
          ping: "",
        },
      ],
      uptimeStatus: "",
      isLoading: true,
    };
  },
};
</script>

<style scoped>
a {
}

h1 {
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  font-size: 2rem;
  /* animation: glitch 4s steps(100) infinite; */
}

p {
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  font-size: 1rem;
}

footer {
  margin-top: 2rem;
  font-family: sans-serif;
  font-weight: bold;
  color: darkgray;
  font-size: 1rem;
}

/* GLITCH EFFECT */
@keyframes glitch {
  0% {
    text-shadow: 1px 0 0 red, -1px 0 0 blue;
  }
  4% {
    text-shadow: 1px 0 0 red, -1px 0 0 blue;
  }
  5% {
    text-shadow: -1px 0 0 red, 1px 0 0 blue;
  }
  10% {
    text-shadow: -1px 0 0 red, 1px 0 0 blue;
  }
  11% {
    text-shadow: 0.5px 0 0 red, -0.5px 0 0 lime;
  }
  15% {
    text-shadow: 0.5px 0 0 red, -0.5px 0 0 lime;
  }
  16% {
    text-shadow: -1px 0 0 red, 1px 0 0 lime;
  }
  20% {
    text-shadow: -1px 0 0 red, 1px 0 0 lime;
  }
  21% {
    text-shadow: 0.7px 0 0 blue, -0.7px 0 0 lime;
  }
  30% {
    text-shadow: 0.7px 0 0 blue, -0.7px 0 0 lime;
  }
  31% {
    text-shadow: -1px 0 0 blue, 1px 0 0 lime;
  }
  40% {
    text-shadow: -1px 0 0 blue, 1px 0 0 lime;
  }
  41% {
    text-shadow: 50px 0 0 blue, -50px 0 0 lime;
  }
  42% {
    text-shadow: 0 0 0 blue, 0 0 0 lime;
  }
  43% {
    text-shadow: 0.5px 0 0 red, -0.5px 0 0 lime;
  }
  46% {
    text-shadow: 0.5px 0 0 red, -0.5px 0 0 lime;
  }
  47% {
    text-shadow: -1px 0 0 red, 1px 0 0 lime;
  }
  50% {
    text-shadow: -1px 0 0 red, 1px 0 0 lime;
  }
  51% {
    text-shadow: 1px 0 0 red, -1px 0 0 blue;
  }
  55% {
    text-shadow: 1px 0 0 red, -1px 0 0 blue;
  }
  56% {
    text-shadow: -1px 0 0 red, 1px 0 0 blue;
  }
  60% {
    text-shadow: -1px 0 0 red, 1px 0 0 blue;
  }
  61% {
    text-shadow: 30px 0 0 red, -30px 0 0 lime;
  }
  62% {
    text-shadow: 0 0 0 red, 0 0 0 lime;
  }
  63% {
    text-shadow: 0.5px 0 0 red, -0.5px 0 0 blue;
  }
  66% {
    text-shadow: 0.5px 0 0 red, -0.5px 0 0 blue;
  }
  67% {
    text-shadow: -1px 0 0 red, 1px 0 0 blue;
  }
  70% {
    text-shadow: -1px 0 0 red, 1px 0 0 blue;
  }
  71% {
    text-shadow: 70px 0 0 red, -70px 0 0 blue;
  }
  72% {
    text-shadow: 0 0 0 red, 0 0 0 blue;
  }
  73% {
    text-shadow: 1px 0 0 red, -1px 0 0 blue;
  }
  76% {
    text-shadow: 1px 0 0 red, -1px 0 0 blue;
  }
  77% {
    text-shadow: -1px 0 0 red, 1px 0 0 blue;
  }
  80% {
    text-shadow: -1px 0 0 red, 1px 0 0 blue;
  }
  81% {
    text-shadow: 0.5px 0 0 red, -0.5px 0 0 lime;
  }
  85% {
    text-shadow: 0.5px 0 0 red, -0.5px 0 0 lime;
  }
  86% {
    text-shadow: -1px 0 0 red, 1px 0 0 lime;
  }
  90% {
    text-shadow: -1px 0 0 red, 1px 0 0 lime;
  }
  91% {
    text-shadow: 60px 0 0 lime, -60px 0 0 blue;
  }
  92% {
    text-shadow: 0 0 0 lime, 0 0 0 blue;
  }
  92% {
    text-shadow: 0.7px 0 0 blue, -0.7px 0 0 lime;
  }
  95% {
    text-shadow: 0.7px 0 0 blue, -0.7px 0 0 lime;
  }
  96% {
    text-shadow: -1px 0 0 blue, 1px 0 0 lime;
  }
  99% {
    text-shadow: -1px 0 0 blue, 1px 0 0 lime;
  }
  100% {
    text-shadow: -1px 0 0 blue, 1px 0 0 lime;
  }
}
</style>
