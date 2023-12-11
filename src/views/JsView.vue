<script setup></script>

<template>
  <section>
    <h1>Quick Reminder</h1>
    <iframe
      src="https://www.youtube.com/embed/DHjqpvDnNGE"
      title="JavaScript in 100 Seconds"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </section>
  <section>
    <h1>Basic Structure</h1>
    <img
      src="https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/tutorials/uploads/pictures/1587882057-1.png"
      alt="Structure of JS function"
    />
  </section>
  <section>
    <h1>JS Words</h1>
    <table>
      <tr>
        <th>Key Word</th>
        <th>Description</th>
      </tr>
      <tr v-for="unit in js_words" :key="unit.unit">
        <td>{{ unit.keyword }}</td>
        <td>{{ unit.explanation }}</td>
      </tr>
    </table>
  </section>
  <section>
    <h1>Difference between Const, Var, and let</h1>
    <article>
      <ul>
        Var has local scope, that means if it is in a function, it is only available to that
        function, if in file, then global. It will also attach itself into the window object.
      </ul>
      <ul>
        'let' is in block scope, meaning that it is only available if it is with in the curly
        bracket. Can not change type after, unlike var.
      </ul>
      <ul>
        Const is similar to let, the only difference been that it is not changeable.
      </ul>
    </article>
  </section>
</template>

<script>
import JsData from '@/assets/js-info.json'
export default {
  data() {
    return {
      js_words: JsData.keywords
    }
  }
}
</script>
