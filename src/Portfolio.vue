<template>
  <div class="portfolio">
    <NavigationPanel @newViewSelected="newViewSelected" />
    <Introduction v-if="selectedView === 0"></Introduction>
    <Resume v-if="selectedView === 1"></Resume>
    <Projects v-if="selectedView === 2"></Projects>
    <Skills v-if="selectedView === 3"></Skills>
  </div>
</template>

<script>
import NavigationPanel from "./components/NavigationPanel";
import Introduction from "./components/page/Introduction";
import Resume from "./components/page/Resume";
import Projects from "./components/page/Projects";
import Skills from "./components/page/Skills";

export default {
  components: {
    NavigationPanel,
    Introduction,
    Resume,
    Projects,
    Skills,
  },
  data() {
    return {
      selectedView: 0,
    };
  },
  methods: {
    newViewSelected(index) {
      this.selectedView = index;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Ubuntu+Condensed");

body {
  margin: 0px !important;
  font-family: "Ubuntu Condensed" !important;
}

.portfolio {
  display: -webkit-box;
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
