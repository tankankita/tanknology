<template>
  <div class="resume-wrapper">
    <div class="resume-header">
      EXPERIENCE
      <hr class="line" />
    </div>
    <WorkExperience> </WorkExperience>
  </div>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import Experience from "../../data/experience.json";
import WorkExperience from "./WorkExperience.vue";

Vue.use(Vuetify);

export default {
  name: "Resume",
  vuetify: new Vuetify(),
  components: {
    WorkExperience,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      reverse: true,
      experiences: Experience,
    };
  },
  computed: {
    isWeb() {
      return window.innerWidth >= 700;
    },
  },
};
</script>

<style scoped>
.resume-header {
  width: 100%;
  height: 100px;
  font-size: 34px;
  color: black;
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;
  margin-bottom: 50px;
}

.line {
  height: 4px;
  width: 111px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  background: #1e3c5f;
  border: 0;
  margin-top: 8px;
}

.resume-wrapper {
  position: absolute;
  margin-top: 70px;
  width: 100%;
  padding: 10%;
  padding-top: 0;
  animation: 0.3s ease-out 0s 1 slideInFromRight;
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
