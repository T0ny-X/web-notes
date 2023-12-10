<script setup>

</script>

<template>
  <section>
    <h1>
      Quick Reminder
    </h1>
    <iframe src="https://www.youtube.com/embed/ok-plXXHlWw" title="HTML in 100 Seconds" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </section>
  <section>
    <h1>
      Basic Structure
    </h1>
    <img src="https://cms-media.bartleby.com/wp-content/uploads/sites/2/2021/11/15093514/StructureofHTMLDocument.jpg" alt="Structure of HTML document">
  </section>
  <section>
    <h1>
      List
    </h1>
    <table>
      <tr>
        <th>Tag</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>&lt;!DOCTYPE html&gt;</td>
        <td>The declaration defining this document to be HTML5.</td>
      </tr>
      <tr>
        <td>&lt;html&gt;</td>
        <td>The root element of an HTML page.</td>
      </tr>
      <tr>
        <td>&lt;head&gt;</td>
        <td>Contains meta-information about the document, like its title and link to CSS.</td>
      </tr>
      <tr>
        <td>&lt;meta&gt;</td>
        <td>Specifies the character set, viewport, and other meta-information.</td>
      </tr>
      <tr>
        <td>&lt;title&gt;</td>
        <td>Sets the title of the document shown in the browser's title bar or tab.</td>
      </tr>
      <tr>
        <td>&lt;body&gt;</td>
        <td>Contains the content of the document, such as text, images, links, etc.</td>
      </tr>
      <tr>
        <td>&lt;header&gt;</td>
        <td>Represents a container for introductory content or a set of navigational links.</td>
      </tr>
      <tr>
        <td>&lt;nav&gt;</td>
        <td>Defines a set of navigation links.</td>
      </tr>
      <tr>
        <td>&lt;section&gt;</td>
        <td>Defines a section in a document.</td>
      </tr>
      <tr>
        <td>&lt;article&gt;</td>
        <td>Specifies independent, self-contained content.</td>
      </tr>
      <tr>
        <td>&lt;footer&gt;</td>
        <td>Defines a footer for a document or a section.</td>
      </tr>
      <tr>
        <td>&lt;h1&gt;, &lt;h2&gt;</td>
        <td>Header tags that represent section headings.</td>
      </tr>
      <tr>
        <td>&lt;p&gt;</td>
        <td>Represents a text paragraph.</td>
      </tr>
      <tr>
        <td>&lt;a&gt;</td>
        <td>Defines a hyperlink.</td>
      </tr>
      <tr>
        <td>&lt;ul&gt; &lt;li&gt;</td>
        <td>Define an unordered list and list items, respectively.</td>
      </tr>
      <tr>
        <td>&lt;img&gt;</td>
        <td>Embeds an image into the document.</td>
      </tr>
      <tr>
        <td>&lt;aside&gt;</td>
        <td>Defines some content aside from the content it is placed in (like a sidebar).</td>
      </tr>
    </table>
  </section>
  <section>
    <h1>Audio Example</h1>
    <p>This is a simple example of embedding audio in an HTML5 webpage, refer to the above code for images and video.</p>
    <audio controls>
      <source src="sound/canon_in_d.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </section>
</template>

<style scoped>

</style>