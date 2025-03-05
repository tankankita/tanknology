<template>
  <div class="skills-wrapper">
    <div class="skills-header">
      <div class="header-text">SKILLS</div>
      <hr class="line" />
    </div>
    <v-app id="inspire">
      
    <div class="skills-container">
      <div class="skills-grid">
        <div
          class="skill-object"
          v-for="(skill, index) in allSkills"
          :key="index"
        >
          <v-card class="skill-card" min-height="800px">
                <v-card-text>
                  <div class="mb-5">
                    {{ skill.category }}
                  </div>
                  <v-timeline align-top dense>
                    <v-timeline-item 
                      v-for="message in skill.skills" 
                      :key="message.name" 
                      color="black" 
                      
                      small>
                      <div>
                        {{ message.name }}
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-card>
        </div>
      </div>
    </div>
      
    </v-app>
  </div>
</template>


<script>
import Vue from "vue";
import Donut from "vue-css-donut-chart";
import "vue-css-donut-chart/dist/vcdonut.css";
import skills from "../../data/skills.json";
import Vuetify from "vuetify";

Vue.use(Vuetify);

Vue.use(Donut);
export default {
  name: "Introduction",
  vuetify: new Vuetify(),
  props: {
    msg: String,
  },
  data() {
    return {
      allSkills: skills.skills,
    };
  },
};
</script>

<style  scoped>
.skills-wrapper {
  font-family: "Courier New" !important;
  position: absolute;
  margin-top: 80px;
  width: 100%;
  height: 100%;
  padding: 2%;
  padding-top: 0;
  display: inline-table;
  background: #f6f6f6;
  border: solid 25px white;
}

.skills-header {
  width: 100%;
  height: 100px;
  font-size: 34px;
  color: black;
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;
}

.skills-grid {
  font-family: "Courier New";
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
}

.skill-label {
  font-weight: 600;
  color: black;
  text-align: center;
  margin-top: -73px;
  margin-left: -33px;
  font-family: "Courier New" !important;
}

.skills-container {
  padding-top: 5%;
}

.skill-object {
  width: auto;
  height: auto;
  margin-left: 13%;
  margin-top: 6%;
}

.skills-wrapper {
  animation: 0.3s ease-out 0s 1 slideInFromRight;
}

::v-deep .v-card__text {
  font-weight: 800 !important;
}

.v-card {
  background: "#cac8c8"
}

::v-deep .v-timeline-item__body {
  font-weight: 800 !important;
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
