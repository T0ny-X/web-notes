<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="message" type="text" placeholder="Enter your message" required />
      <div id="recaptcha" class="g-recaptcha" :data-sitekey="process.env.VUE_APP_SITE_KEY"></div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: '',
    };
  },
  methods: {
    async handleSubmit() {
      const response = grecaptcha.getResponse();
      if (response.length === 0) {
        alert('Please verify reCAPTCHA');
        return;
      }

      const verifyResponse = await axios.post('https://www.google.com/recaptcha/api/siteverify', {
        secret: process.env.VUE_APP_SECRET_KEY,
        response,
      });

      if (!verifyResponse.data.success) {
        alert('Failed reCAPTCHA verification');
        return;
      }

      const dbResponse = await axios.post(process.env.VUE_APP_DATABASE_URL, {
        message: this.message,
      });

      if (dbResponse.status === 200) {
        alert('Message recorded successfully');
      } else {
        alert('Failed to record message');
      }
    },
  },
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  },
};
</script>
