<template>
  <div class="skills">
    <h1>Skills</h1>
    <div class="skills_container">
      <div class="skills_container_item">
        <h2>DevOps</h2>
        <ul>
          <li>Infrastructure as Code with Terraform</li>
          <li>Continuous Integration and Continuous Deployment with GitLab, GitHub, and Azure DevOps</li>
          <li>Containerization with Docker and Kubernetes (EKS, AKS)</li>
          <li>Cloud Computing with AWS (EC2, Lambda, S3, CloudFront, ELB), Azure, and GCP</li>
          <li>Monitoring and Logging with Prometheus and Grafana</li>
          <li>Version Control with Git</li>
        </ul>
      </div>
      <div class="skills_container_item">
        <h2>Software Development</h2>
        <ul>
          <li>Languages: Java, C#, .NET, TypeScript, JavaScript (React), Python, Bash, Kotlin</li>
          <li>Web Technologies: HTML, CSS</li>
          <li>Databases: SQL (T-SQL), NoSQL</li>
          <li>API Development: RESTful APIs</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills {
  margin-top: 2rem;
  padding: 1rem;
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
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  margin: 0 10px;
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
