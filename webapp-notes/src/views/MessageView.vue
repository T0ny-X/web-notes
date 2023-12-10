<template>
  <form id="message-form" @submit.prevent="handleSubmit">
    <input v-model="message" type="text" placeholder="Enter your message" required />
    <br>
    <button class="g-recaptcha"
            :data-sitekey="siteKey"
            data-callback='onSubmit'
            data-action='submit'>Submit</button>
  </form>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VUE_APP_FIREBASE_APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
export default {
  data() {
    return {
      siteKey: '6LcUK3MoAAAAACGlvl2vbZub9HJ_lQeVFJ5YYDrD',
      message: '',
    };
  },
  methods: {
    handleSubmit() {
      this.db.collection("messages").add({
        message: this.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            this.message = ''; // clear the input field
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
    },
    onSubmit() {
      document.getElementById("message-form").submit();
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
