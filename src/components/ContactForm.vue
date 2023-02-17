<template>
  <form @submit.prevent="sendWebhook">
    <input type="text" v-model="name" placeholder="Name" required />
    <input type="email" v-model="email" placeholder="Email" required />
    <textarea v-model="message" placeholder="Message" required></textarea>
    <button type="submit">Send</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 500px;
  padding: 1rem;
  background-color: var(--color-background-soft);
  border-radius: 0.5rem;
}

input,
textarea {
  width: 100%;
  height: 2rem;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 0.25rem;
  background-color: var(--color-background-mute);
  color: var(--color-text);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-border-hover);
}

button {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 0.25rem;
  background-color: var(--color-background-mute);
  color: var(--color-text);
  cursor: pointer;
}

button:hover {
  background-color: var(--color-background);
  color: var(--color-heading);
}
</style>

<script>
import md5 from "js-md5";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async sendWebhook() {
      const webhookUrl =
        "https://canary.discord.com/api/webhooks/1075927878891470888/DNdQfm_MxdjYaQUmCecCHrBd8MUCkbytT91gy-GtDycGGM3Po-c0ZP_x5U0OjHah5hyC";
      const embed = {
        title: `New message from ${this.name}`,
        color: 16711680,
        image: {
          // Get the image from the Gravatar API using the email address
          url: "https://gravatar.com/avatar/" + md5(this.email) + "?s=128",
        },
        fields: [
          {
            name: "Name",
            value: this.name,
            inline: true,
          },
          {
            name: "Email",
            value: this.email,
            inline: true,
          },
          {
            name: "Message",
            value: this.message,
          },
        ],
        timestamp: new Date(),
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ embeds: [embed] }),
      };

      try {
        const response = await fetch(webhookUrl, options);
        console.log(`Message sent with status ${response.status}`);
        this.name = "";
        this.email = "";
        this.message = "";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
