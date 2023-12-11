<!-- src/views/DataView.vue -->

<template>
  <div>
    <h1>Data View</h1>

    <!-- Display Messages -->
    <div v-if="messages.length > 0" class="message-list">
      <h2>Messages:</h2>
      <ul>
        <li v-for="message in messages" class="message-item">
          {{ message.text }}
        </li>
      </ul>
    </div>

    <!-- Add Message Form -->
    <h2>Add Message to Firestore</h2>
    <form @submit.prevent="addMessage">
      <label>
        Message:
        <input v-model="newMessage" type="text" required />
      </label>
      <button type="submit">Add Message</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      messages: [],
      newMessage: "",
    };
  },
  mounted() {
    // Load messages when the component is mounted
    this.loadMessages();
  },
  methods: {
    async loadMessages() {
      const API_KEY = process.env.VUE_APP_FIREBASE_API_KEY
      const PROJECT_ID = process.env.VUE_APP_FIREBASE_PROJECT_ID
      try {
        const response = await axios.get(
            `https://firestore.googleapis.com/v1/projects/${ PROJECT_ID }/databases/(default)/documents/messages?key=${API_KEY}`
        );

        this.messages = response.data.documents.map((doc) => {
          let text = '';
          if (doc.fields.text) {
            text = doc.fields.text.stringValue;
          } else if (doc.fields.message) {
            text = doc.fields.message.stringValue;
          }
          return {
            id: doc.name.split("/").pop(),
            text: text,
          };
        });
      } catch (error) {
        console.error("Error loading messages:", error);
      }
    },
    async addMessage() {
      const API_KEY = process.env.VUE_APP_FIREBASE_API_KEY
      const PROJECT_ID = process.env.VUE_APP_FIREBASE_PROJECT_ID
      try {
        const response = await axios.post(
            `https://firestore.googleapis.com/v1/projects/${ PROJECT_ID }/databases/(default)/documents/messages?key=${API_KEY}`,
            {
              fields: {
                text: { stringValue: this.newMessage },
              },
            }
        );

        console.log("Message added:", response.data);
        this.newMessage = ""; // Clear the input field
        await this.loadMessages(); // Reload messages after adding a new one
      } catch (error) {
        console.error("Error adding message:", error);
      }
    },
  },
};
</script>

<style scoped>

.message-list {
  margin-top: 20px;
}

.message-item {
  list-style-type: none;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
}

</style>
