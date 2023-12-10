<template>
  <section>
    <h1>
      Quick Reminder
    </h1>
    <iframe src="https://www.youtube.com/embed/OEV8gMkCHXQ" title="CSS in 100 Seconds" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </section>
  <section>
    <h1>
      Basic Structure
    </h1>
    <img src="https://io.bikegremlin.com/wp-content/uploads/2019/11/css-structure.png" alt="Structure of CSS Code">
  </section>
  <section>
    <h1> Table for Attributes</h1>
    <table>
      <tr>
        <th>Property</th>
        <th>Description</th>
      </tr>
      <tr v-for="unit in css_attributes" :key="unit.unit">
        <td>{{ unit.property }}</td>
        <td>{{ unit.description }}</td>
      </tr>
    </table>
  </section>
  <section>
    <h1>Specificity Hierarchy</h1>
    <p>Every CSS selector has its place in the specificity hierarchy, the more specific (max to inline), the higher priority it gets.</p>
    <p>There are four categories which define the specificity level of a selector:</p>
    <ul>
      <li>Inline styles - Example: &lt;h1 style="color: pink;"></li>
      <li>IDs - Example: #navbar</li>
      <li>Classes, pseudo-classes, attribute selectors - Example: .test, :hover, [href]</li>
      <li>Elements and pseudo-elements - Example: h1, ::before</li>
    </ul>
    <br>
    <p>In CSS, specificity and proximity to the content determine the priority of styling rules. Here's how it works:</p>
    <ul>
      <li><strong>Specificity</strong>: The more specific a selector is, the higher its priority. For example, an ID selector has higher specificity than a class selector. Inline styles have the highest specificity.</li>
      <li><strong>Proximity</strong>: The closer a style rule is to the content it affects, the higher its priority. For example, a style rule in an inline style attribute has higher priority than one in a &lt;style&gt; tag in the &lt;head&gt; of the document, which in turn has higher priority than one in an external CSS file.</li>
    </ul>
    <p>When two rules have the same specificity, the one that comes last in the CSS is the one that will be applied.</p>
  </section>
  <section>
    <h1>HTML Units</h1>
    <p>HTML units are used in web development to define sizes and distances. Here are some common units:</p>
    <table>
      <tr>
        <th>Unit</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
      <tr v-for="unit in css_units" :key="unit.unit">
        <td>{{ unit.unit }}</td>
        <td>{{ unit.description }}</td>
        <td><code>{{ unit.example }}</code></td>
      </tr>
    </table>
  </section>
</template>

<script>
import CssData from '@/assets/css-info.json'
export default {
  data() {
    return {
      css_attributes: CssData.attributes,
      css_units : CssData.units,
    };
  },
};
</script>
