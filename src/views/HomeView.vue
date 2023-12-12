<template>
  <main>
    <section>
      <h1>About this Site</h1>
      <article>
        <p>
          I created this website to share things that I have encountered during my web app
          development joinery, from HTML to Firebase. I might also include more things in the
          future. This website is meant to be a helpful resource for those who want to learn or
          review some basic things about these tools. And since this is basic, some of the more
          complex things will not be mentioned.
        </p>
      </article>
    </section>

    <section>
      <h1>Personal Thoughts</h1>
      <article>
        <p>
          The main focus for this website is to be as useful while concise as possible. It is true
          that there is little to no need for people to build a website from scratch. The existence
          of platforms like <a href="https://wix.com">wix</a> proved it. But there is still
          something satisfying about creating your own site, even if it's just for fun. You can
          learn new skills, express your creativity, and customize every detail to your liking.
          Plus, you never know when you might need to tweak or fix something that a template can't
          handle.
        </p>
      </article>
    </section>

    <section>
      <h1>Technology Mentioned</h1>
      <article>
        <div>
          <div v-for="category in categoryOptions" :key="category">
            <h3>{{ category }}</h3>
            <ul>
              <li v-for="technology in filteredTechnologies[category]" :key="technology.name">
                <a :href="technology.website" target="_blank">{{ technology.name }}</a>
              </li>
            </ul>
          </div>
        </div>
        <noscript>
          <div>
            <h3>Technology Mentioned (Not updated, enable JavaScript to see the latest)</h3>
            <ul>
              <li><a href="https://www.djangoproject.com/" target="_blank">Django</a> (Backend framework)</li>
              <li><a href="https://palletsprojects.com/p/flask/" target="_blank">Flask</a> (Backend framework)</li>
              <li><a href="https://vuejs.org/" target="_blank">Vue</a> (Frontend framework)</li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML</a> (Page language)</li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a> (Page style)</li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JS</a> (Page behavior)</li>
              <li><a href="https://www.google.com/recaptcha/intro/v3.html" target="_blank">ReCaptcha</a> (In page service)</li>
              <li><a href="https://analytics.google.com/" target="_blank">Analytics</a> (In page service)</li>
              <li><a href="https://firebase.google.com/docs/firestore" target="_blank">Firestore</a> (Backend database)</li>
              <li><a href="https://planetscale.com/" target="_blank">PlanetScale</a> (Backend database)</li>
              <li><a href="https://vercel.com/guides/databases" target="_blank">Vercel PostgreSQL</a> (Backend database)</li>
              <li><a href="https://www.cloudflare.com/" target="_blank">Cloudflare</a> (Hosting)</li>
              <li><a href="https://www.cloudflare.com/learning/ssl/" target="_blank">SSL</a> (Hosting)</li>
              <li><a href="https://httpd.apache.org/" target="_blank">Apache2</a> (Hosting)</li>
              <li><a href="https://sites.google.com/" target="_blank">Google Sites</a> (Hosting)</li>
              <li><a href="https://github.com/features/actions" target="_blank">GitHub Actions</a> (DevOps)</li>
            </ul>
          </div>
        </noscript>
      </article>
    </section>
  </main>
</template>

<script>
import technologiesData from '@/assets/technologies.json'

export default {
  data() {
    return {
      technologies: technologiesData.technologies,
      categoryOptions: []
    }
  },
  mounted() {
    this.categoryOptions = [...new Set(this.technologies.map((technology) => technology.category))]
  },
  computed: {
    filteredTechnologies() {
      const categories = {}
      for (const technology of this.technologies) {
        if (!categories[technology.category]) {
          categories[technology.category] = []
        }
        categories[technology.category].push(technology)
      }
      return categories
    }
  }
}
</script>
