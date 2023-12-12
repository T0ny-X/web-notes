<template>
  <section>
    <h1>Quick Reminder</h1>
    <iframe
      src="https://www.youtube.com/embed/OEV8gMkCHXQ"
      title="CSS in 100 Seconds"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </section>
  <section>
    <h1>Basic Structure</h1>
    <img
      src="https://io.bikegremlin.com/wp-content/uploads/2019/11/css-structure.png"
      alt="Structure of CSS Code"
    />
  </section>
  <section>
    <h1>Table for Attributes</h1>
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
    <noscript>
      <table>
        <tr>
          <th>Property</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>background-color</td>
          <td>Specifies the background color of an element.</td>
        </tr>
        <tr>
          <td>color</td>
          <td>Defines the color of the text inside an element.</td>
        </tr>
        <tr>
          <td>font-family</td>
          <td>Specifies the font for the text inside an element.</td>
        </tr>
        <tr>
          <td>font-size</td>
          <td>Defines the size of the font.</td>
        </tr>
        <tr>
          <td>margin</td>
          <td>Sets the margin space around elements.</td>
        </tr>
        <tr>
          <td>padding</td>
          <td>Sets the padding space inside an element.</td>
        </tr>
        <tr>
          <td>border</td>
          <td>Specifies the border around elements.</td>
        </tr>
        <tr>
          <td>width</td>
          <td>Defines the width of an element.</td>
        </tr>
        <tr>
          <td>height</td>
          <td>Defines the height of an element.</td>
        </tr>
        <tr>
          <td>text-align</td>
          <td>Specifies the horizontal alignment of text in an element.</td>
        </tr>
        <tr>
          <td>position</td>
          <td>Specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).</td>
        </tr>
        <tr>
          <td>display</td>
          <td>Specifies if/how an element is displayed.</td>
        </tr>
        <tr>
          <td>opacity</td>
          <td>Sets the opacity level for an element.</td>
        </tr>
        <tr>
          <td>z-index</td>
          <td>Sets the stack order of an element.</td>
        </tr>
        <tr>
          <td>overflow</td>
          <td>Specifies what should happen if content overflows an element's box.</td>
        </tr>
      </table>
      <p>More detailed information is available with JavaScript enabled.</p>
    </noscript>
  </section>
  <section>
    <h1>Specificity Hierarchy</h1>
    <p>
      Every CSS selector has its place in the specificity hierarchy, the more specific (max to
      inline), the higher priority it gets.
    </p>
    <p>There are four categories which define the specificity level of a selector:</p>
    <ul>
      <li>Inline styles - Example: &lt;h1 style="color: pink;"></li>
      <li>IDs - Example: #navbar</li>
      <li>Classes, pseudo-classes, attribute selectors - Example: .test, :hover, [href]</li>
      <li>Elements and pseudo-elements - Example: h1, ::before</li>
    </ul>
    <br />
    <p>
      In CSS, specificity and proximity to the content determine the priority of styling rules.
      Here's how it works:
    </p>
    <ul>
      <li>
        <strong>Specificity</strong>: The more specific a selector is, the higher its priority. For
        example, an ID selector has higher specificity than a class selector. Inline styles have the
        highest specificity.
      </li>
      <li>
        <strong>Proximity</strong>: The closer a style rule is to the content it affects, the higher
        its priority. For example, a style rule in an inline style attribute has higher priority
        than one in a &lt;style&gt; tag in the &lt;head&gt; of the document, which in turn has
        higher priority than one in an external CSS file.
      </li>
    </ul>
    <p>
      When two rules have the same specificity, the one that comes last in the CSS is the one that
      will be applied.
    </p>
  </section>
  <section>
    <h1>CSS Units</h1>
    <p>
      CSS units are used in web development to define sizes and distances. Here are some common units:
    </p>
    <table>
      <tr>
        <th>Unit</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
      <tr v-for="unit in css_units" :key="unit.unit">
        <td>{{ unit.unit }}</td>
        <td>{{ unit.description }}</td>
        <td>
          <code>{{ unit.example }}</code>
        </td>
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
      css_units: CssData.units
    }
  }
}
</script>
