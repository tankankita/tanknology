<template>
    <section id="projects">
      <h1>Projects</h1>
      <div class="projects-container">
        <div class="project-card" v-for="project in projects" :key="project.name">
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          { name: "Drone Simulator", description: "A web-based drone programming tool using Blockly." },
          { name: "Task Scheduler", description: "A priority-based task scheduling application in Java." }
        ]
      };
    }
  };
  </script>