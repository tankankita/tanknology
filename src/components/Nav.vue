<template>
    <nav>
      <ul>
        <li v-for="section in sections" :key="section" @click="$emit('scroll-to', section)">{{ section }}</li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sections: ["About", "Experience", "Projects", "Skills", "Reach Me"]
      };
    }
  };
  </script>
  
<style scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 20px;
  padding: 0;
}
nav ul li {
  cursor: pointer;
  font-weight: bold;
}
</style>