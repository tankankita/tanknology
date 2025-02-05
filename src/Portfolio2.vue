<template>
  
  <div id="portfolio">
    <div>
    <nav>
      <router-link to="/tanknology/for-sid">For Sid</router-link>
    </nav>
    <router-view />
  </div>


  <div v-if="isSecret">
    <NavBar @scroll-to="scrollTo" />
    <main>
      <AboutSection id="about" />
      <ExperienceSection id="experience" />
      <ProjectsSection id="projects" />
      <SkillsSection id="skills" />
    </main>
  </div>
    
  </div>
</template>

<script>
import NavBar from "./components/Nav.vue";
import AboutSection from "./components/About.vue";
import ExperienceSection from "./components/Experience.vue";
import ProjectsSection from "./components/Projects.vue";
import SkillsSection from "./components/Skills.vue";

export default {
  components: {
    NavBar,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    SkillsSection,
  },
  computed: {
    isSecret() {
      return false;
    }
  },
  methods: {
    scrollTo(section) {
      document.getElementById(section.toLowerCase()).scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
#portfolio {
  font-family: Arial, sans-serif;
  color: #333;
  text-align: center;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

section {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: #f9f9f9;
}
</style>
