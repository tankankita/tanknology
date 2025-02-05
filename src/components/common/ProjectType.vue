<template>
  <div class="project-type">
    <div class="buttons-wrapper">
      <nav class="type-content">
        <ol class="scene_nav_list">
          <li
            class="scene_nav_item"
            v-for="(params, index) in navDataOptions.length"
            :key="index"
          >
            <button
              class="scene_nav_button"
              @click="selectedView(index, navDataOptions[index])"
              :class="{ 'o-active active-button-text': isActiveScene(index) }"
            >
              {{ navDataOptions[index].text }}
            </button>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
import navData from "../../data/projectNavigationOption.json";

export default {
  name: "ProjectTypes",
  props: {
    projectType: {
      type: String,
      default: "Title Unavailable",
    },
  },
  data() {
    return {
      scene: 0,
      navDataOptions: navData,
    };
  },
  methods: {
    selectedView(index) {
      this.scene = index;
      this.$emit("onProjectItemClick", this.navDataOptions[index]);
    },
    isActiveScene(index) {
      return this.scene - 1 === index - 1;
    },
  },
};
</script>
<style scoped>
.buttons-wrapper {
  margin: auto;
  width: 58%;
  margin-top: 40px;
}

.project-type {
  width: 100%;
  height: 50px;
}

.navigation-panel {
  width: 100%;
  z-index: 1;
  background: #000000a3;
  /* background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%); */
  height: 80px;
}
.type-content {
  display: inline-block;
}

.scene_nav_list {
  display: flex;
  margin: 0;
  padding: 0;
}
.scene_nav_item {
  display: block;
  margin-left: 10px;
}
.scene_nav_button {
  width: 170px;
  height: 50px;
  border-width: 0px;
  background: #9393938c;
  cursor: pointer;
  border-radius: 10px;
}

.scene_nav_button.o-active {
  background:#173f59f5
}
.scene_nav_button:hover {
  background:#383838bf;
}

.active-button-text {
  color: white;
}

.inactive-icon {
  color: white;
}
</style>