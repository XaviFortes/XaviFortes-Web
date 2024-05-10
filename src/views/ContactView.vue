<template>
  <div class="contact-container">
    <h1>Contact</h1>
    <p>If you would like to get in touch with me, you can find me on</p>
    <div class="contact-options">
      <p>
        LinkedIn:
        <a href="https://www.linkedin.com/in/xavi-fortes/" target="_blank" rel="noopener noreferrer">Xavi Fortes</a>
      </p>
      <p>
        Email:
        <a href="mailto:xavifortes@xavifortes.com">xavifortes@xavifortes.com</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.contact-options {
  margin-bottom: 1rem;
}

.contact-options p {
  margin-bottom: 0.5rem;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.submit-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
