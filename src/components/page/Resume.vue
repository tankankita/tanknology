<template>
  <div class="resume-wrapper">
    <div class="resume-header">
      EDUCATION
      <hr class="line" />
    </div>

    
    <div> 
       <Education> </Education>
     </div>

     <div class="resume-header">
      WORK EXPERIENCE
      <hr class="line" />
    </div>

     <div> 
       <WorkExperience> </WorkExperience>
     </div>
  </div>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import WorkExperience from "./WorkExperience.vue";
import Education from "./Education.vue";


Vue.use(Vuetify);

export default {
  name: "Resume",
  vuetify: new Vuetify(),
  components: {
    WorkExperience,
    Education
  },
  props: {
    msg: String,
  },
  data() {
    return {
      reverse: true,
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
  color: white;
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
  background: white;
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
