<template>
  <div>
    <h1>Magical Button</h1>
    <p v-if="advice">{{ advice }}</p>
    <br />
    <button @click="getAdvice">Get Advice</button>
  </div>
  <br>
  <section>
    <h1>How does it work</h1>

    <h2>Imports:</h2>
    <p>
      <strong>axios:</strong> This is a popular HTTP client library used in JavaScript to make API requests.
    </p>

    <h2>Object Definition:</h2>
    <p>
      <strong>data():</strong> This function initializes the object's state. Here, it defines a variable advice
      with a default value of null.
    </p>
    <p>
      <strong>methods:</strong> This object holds the functions that manipulate the state. Here, we have one
      method:
      <br>
      <strong>getAdvice:</strong> This async function makes an HTTP GET request to the URL
      https://api.adviceslip.com/advice.
    </p>
    <ul>
      <li><code>await axios.get:</code> This line waits for the API response before continuing.</li>
      <li><code>response.data.slip.advice:</code> This extracts the actual advice text from the response
        data.</li>
      <li><code>this.advice = response.data.slip.advice:</code> This assigns the extracted advice text to
        the advice variable in the object's state.</li>
    </ul>

    <h2>Usage:</h2>
    <p>
      When the application runs, it creates an instance of this object. Then, it can call the <code>getAdvice</code> method to fetch a piece
      of advice. Once the advice is fetched, it can be accessed through the <code>advice</code> variable.
    </p>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      advice: null
    }
  },
  methods: {
    async getAdvice() {
      const response = await axios.get('https://api.adviceslip.com/advice')
      this.advice = response.data.slip.advice
    }
  }
}
</script>
