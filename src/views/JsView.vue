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
    <noscript>
      <table>
        <tr>
          <th>Keyword</th>
          <th>Explanation</th>
        </tr>
        <tr>
          <td>abstract</td>
          <td>A class or method that cannot be instantiated directly, but can only be used as a blueprint for creating subclasses.</td>
        </tr>
        <tr>
          <td>arguments</td>
          <td>An object that provides information about the arguments passed to a function.</td>
        </tr>
        <tr>
          <td>await</td>
          <td>Pauses the execution of an asynchronous task and waits for it to complete.</td>
        </tr>
        <tr>
          <td>boolean</td>
          <td>A data type that represents logical values of true or false.</td>
        </tr>
        <tr>
          <td>break</td>
          <td>Exits a loop or switch statement prematurely.</td>
        </tr>
        <tr>
          <td>byte</td>
          <td>A data type that represents 8-bit integers.</td>
        </tr>
        <tr>
          <td>case</td>
          <td>Used in switch statements to specify a particular block of code to be executed based on the value of an expression.</td>
        </tr>
        <tr>
          <td>catch</td>
          <td>Handles exceptions that occur within a try block.</td>
        </tr>
        <tr>
          <td>char</td>
          <td>A data type that represents a single character.</td>
        </tr>
        <tr>
          <td>class</td>
          <td>A blueprint for creating objects with specific properties and methods.</td>
        </tr>
        <tr>
          <td>const</td>
          <td>A variable whose value cannot be changed after it is initialized.</td>
        </tr>
        <tr>
          <td>continue</td>
          <td>Skips the rest of the current iteration of a loop and proceeds to the next iteration.</td>
        </tr>
        <tr>
          <td>debugger</td>
          <td>Pauses the execution of a script and enters a debugging mode.</td>
        </tr>
        <tr>
          <td>default</td>
          <td>A fallback block of code in switch statements that is executed if no other case matches.</td>
        </tr>
        <tr>
          <td>delete</td>
          <td>Removes a property from an object or an element from an array.</td>
        </tr>
        <tr>
          <td>do</td>
          <td>Creates a loop that executes its block of code at least once before evaluating the condition.</td>
        </tr>
        <tr>
          <td>double</td>
          <td>A data type that represents 64-bit floating-point numbers.</td>
        </tr>
        <tr>
          <td>else</td>
          <td>Specifies an alternative block of code to be executed if a condition is false.</td>
        </tr>
        <tr>
          <td>enum</td>
          <td>Defines a custom type with a set of predefined values.</td>
        </tr>
        <tr>
          <td>eval</td>
          <td>Evaluates a string as JavaScript code and executes it.</td>
        </tr>
        <tr>
          <td>export</td>
          <td>Makes variables, functions, classes, or other constructs accessible from other modules or scripts.</td>
        </tr>
        <tr>
          <td>extends</td>
          <td>Inherits properties and methods from another class.</td>
        </tr>
        <tr>
          <td>FALSE</td>
          <td>A literal value that represents the logical value of false.</td>
        </tr>
        <tr>
          <td>final</td>
          <td>Prevents a class or method from being overridden in subclasses.</td>
        </tr>
        <tr>
          <td>finally</td>
          <td>Ensures that a block of code is executed regardless of whether a try block throws an exception or not.</td>
        </tr>
        <tr>
          <td>float</td>
          <td>A data type that represents 32-bit floating-point numbers.</td>
        </tr>
        <tr>
          <td>for</td>
          <td>Creates a loop that executes a block of code repeatedly until a condition is met.</td>
        </tr>
        <tr>
          <td>function</td>
          <td>A reusable block of code that can be called with arguments.</td>
        </tr>
        <tr>
          <td>goto</td>
          <td>Jumps to a specific label within a script.</td>
        </tr>
        <tr>
          <td>if</td>
          <td>Executes a block of code conditionally based on the evaluation of an expression.</td>
        </tr>
        <tr>
          <td>implements</td>
          <td>Specifies that a class conforms to the requirements of an interface.</td>
        </tr>
        <tr>
          <td>import</td>
          <td>Imports variables, functions, classes, or other constructs from another module or script.</td>
        </tr>
        <tr>
          <td>in</td>
          <td>Checks whether a property exists in an object or a value exists in an array.</td>
        </tr>
        <tr>
          <td>instanceof</td>
          <td>Checks whether an object is an instance of a particular class.</td>
        </tr>
        <tr>
          <td>int</td>
          <td>A data type that represents 32-bit integers.</td>
        </tr>
        <tr>
          <td>interface</td>
          <td>Defines a set of methods that a class must implement.</td>
        </tr>
      </table>
      <p>More detailed information is available with JavaScript enabled.</p>
    </noscript>
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
