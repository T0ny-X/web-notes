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
