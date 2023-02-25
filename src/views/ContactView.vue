<template>
  <div>
    <h1>Contact</h1>
    <p>
      If you would like to get in touch with me, please send me an email at
      <a href="mailto:xavifortes@xavifortes.com">xavifortes@xavifortes.com</a>.
    </p>
    <p>
      Or you can fill out the form below and I will get back to you as soon as
      possible.
    </p>
    &nbsp;
    <ContactForm ref="contactForm" />
  </div>
</template>

<script lang="ts">
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "ContactView",
  components: {
    ContactForm,
  },
  methods: {
    submitForm() {
      (this.$refs.contactForm as typeof ContactForm).sendEmail();
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  margin-right: auto;
}

p {
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
}
</style>
