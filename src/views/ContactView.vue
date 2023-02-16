<template>
  <div>
    <h1>Contact</h1>
    <p>
      If you would like to get in touch with me, please send me an email at
      <a href="mailto:xavifortes@xavifortes.com">xavifortes@xavifortes.com</a>.
    </p>
    <form @submit.prevent="sendEmail">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="form.name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email" required />

      <label for="message">Message:</label>
      <textarea id="message" v-model="form.message" required></textarea>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import nodemailer from "nodemailer";

export default defineComponent({
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      }
    };
  },
  methods: {
    async sendEmail() {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "your-email@gmail.com",
          pass: "your-email-password",
        },
      });

      const mailOptions = {
        from: this.form.email,
        to: "recipient-email@example.com",
        subject: `New message from ${this.form.name}`,
        text: this.form.message,
      };

      try {
        await transporter.sendMail(mailOptions);
        alert("Message sent successfully!");
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
      } catch (err) {
        console.error(err);
        alert("Failed to send message.");
      }
    },
  },
});
</script>
