<template>
  <v-app id="inspire">
    <v-timeline
      class="timeline-wrapper"
      :dense="true"
      :theme="$vuetify.theme.dark ? 'dark' : 'light'"
      >
      <v-timeline-item
        v-for="(education, index) in educations"
        :key="index"
        
        small
      >
        <template v-slot:icon>
          <v-avatar size="60">
            <a class="company-icon" :href="education.site" target="_blank">
              <img
                v-if="education.logo.length"
                :src="require(`../../assets/${education.logo}`)"
              />
            </a>
          </v-avatar>
        </template>

        <v-card shaped elevation="20" class="elevation-10" max-width="450px" >
          <v-card-title class="job-title" :style="{'background': education.backdrop}">
            <div>
              {{ education.major }}
            </div>
          </v-card-title >
          
          <v-card-subtitle :style="{'background': education.backdrop, 'margin-top': '0px'}">
            <a class="company-name" :href="education.site" target="_blank">{{ education.university }}</a>
            <p class="duration">{{ education.startYear }} - {{ education.endYear }}</p>
          </v-card-subtitle>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-app>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import Education from "../../data/education.json";

Vue.use(Vuetify);

export default {
  name: "Education",
  vuetify: new Vuetify(),
  props: {
    msg: String,
  },
  data() {
    return {
      reverse: true,
      educations: Education,
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
  background: #7ac3d1;
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

.job-title {
  font-family: "Courier New";
  color: black;
  font-size: 20px;
  font-weight: 600;
}

.bulletin-symbol {
  float: left;
  width: 4%;
  font-size: 13px;
}

.bulletin-text {
  font-family: "Courier New";
  color: #272727;
  line-height: 17px;
  margin-bottom: 15px;
}
.description {
  display: flex;
}

.timeline-wrapper {
  background: #2525259c;
}
.extra-passing {
  padding: 40px;
}

.company-name {
  font-family: "Courier New";
  color: black;
  font-size: 17px;
  font-weight: 600;
}
.duration {
  font-family: "Courier New";
  font-size: 14px;
  font-weight: 600;
}
.experience-header {
  display: flex;
}
.v-application p {
  margin-bottom: 0px !important;
}

.company-icon {
  height: 60px;
  width: 60px;
}

.v-card {
  background:#e3e3e3d6;
  transition: transform 0.3s ease-in-out;
}

.v-card:hover {
  transform: scale(1.05); /* Slight zoom-in effect */
}

::v-deep(.v-application--wrap) {
    min-height: 0vh !important;
}

#inspire > div {
  background: green;
}
</style>
