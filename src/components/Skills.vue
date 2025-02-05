<template>
  <section id="skills">
    <h1>Skills</h1>
    <ul>
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: ["Vue.js", "JavaScript", "Three.js", "React", "Java", "Python"]
    };
  }
};
</script>