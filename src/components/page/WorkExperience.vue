<template>
  <v-app id="inspire">
    <v-timeline
      class="timeline-wrapper"
      :dense="!isWeb"
      :class="{ 'extra-passing': isWeb }"
    >
      <v-timeline-item
        v-for="(experience, index) in experiences"
        :key="index"
        color="black"
        small
      >
        <template v-slot:icon>
          <v-avatar size="60">
            <a class="company-icon" :href="experience.companySite" target="_blank">
              <img
                v-if="experience.logo.length"
                :src="require(`../../assets/${experience.logo}`)"
              />
            </a>
          </v-avatar>
        </template>

        <v-card outlined shaped elevation="11" class="elevation-2">
          <v-card-title class="job-title">
              {{ experience.jobTitle }}
          </v-card-title >
          
          <v-card-subtitle>
            <a class="company-name" :href="experience.companySite" target="_blank">{{ experience.companyName }}</a>
            <p class="duration">{{ experience.startYear }} - {{ experience.endYear }}</p>
          </v-card-subtitle>

          <v-card-text>
            <div
              class="description"
              v-for="(bulletin, bIndex) in experience.description"
              :key="bIndex"
            >
              <div class="bulletin-text">{{ bulletin }}</div>
            </div>          
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-app>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import Experience from "../../data/experience.json";

Vue.use(Vuetify);

export default {
  name: "Resume",
  vuetify: new Vuetify(),
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
  background: #f6f6f6;
}
.extra-passing {
  padding: 40px;
}
.header {
  color: red;
}
.company-name {
  font-family: "Courier New";
  color: #1a4665;
  font-size: 17px;
}
.duration {
  font-family: "Courier New";
  color: #1a4665;
  font-size: 14px;
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
</style>
