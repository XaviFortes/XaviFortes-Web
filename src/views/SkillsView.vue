<template>
  <div class="skills">
    <h1>Skills</h1>
    <div class="skills_container">
      <div class="skills_container_item">
        <h2>DevOps</h2>
        <ul>
          <li>Infrastructure as Code with Terraform</li>
          <li>Continuous Integration and Continuous Deployment with Gitlab</li>
          <li>Containerization with Docker and Kubernetes</li>
          <li>Cloud Computing with AWS</li>
          <li>Monitoring and Logging with Prometheus and Grafana</li>
          <li>Version Control with Git</li>
        </ul>
      </div>
      <div class="skills_container_item">
        <h2>Software Developer</h2>
        <ul>
          <li>Java</li>
          <li>C# / .NET</li>
          <li>TypeScript/JavaScript React</li>
          <li>Python</li>
          <li>Bash</li>
          <li>Kotlin</li>
          <li>HTML and CSS</li>
          <li>SQL / NoSQL</li>
          <li>Rest APIs</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills {
  margin-top: 2rem;
  padding: 1rem;
  /* background-color: #f5f5f5; */
}

.skills h1 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
}

.skills_container {
  display: flex;
  justify-content: center;
}

.skills_container_item {
  background-color: #202020;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
}

.skills_container_item h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding-left: 0;
}

ul li {
  margin-bottom: 0.5rem;
}

ul li::before {
  content: "•";
  display: inline-block;
  margin-right: 0.5rem;
}
</style>
