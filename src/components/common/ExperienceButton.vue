<template>
  <div class="project-button">
        <button
                  class="scene_nav_button"
                  @click="selectedView(index)"
                  :class="{ 'o-active': isActiveScene(index) }"
                >
  </div>
</template>

<script>
export default {
  name: "Button",
  components: {},
  props: {
    text: {
      type: String,
      default: "Button",
    },
  },
  methods: {},
};
</script>

<style scoped>
.button {
  background-color: #097896;
  border: none;
  color: white;
  padding: 10px 10px;
  border-radius: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

.button:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
