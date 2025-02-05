<template>
  <div class="skills-wrapper">
    <div class="skills-header">
      <div class="header-text">SKILLS</div>
      <hr class="line" />
    </div>
    <div class="skills-container">
      <div class="skills-grid">
        <div
          class="skill-object"
          v-for="(skill, index) in allSkills"
          :key="index"
        >
          <Progress
            :transitionDuration="1000"
            :radius="100"
            :strokeWidth="8"
            :value="skill.percentage"
            strokeColor="#1e3c5f"
          ></Progress>
          <h5 class="skill-label">{{ skill.label }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Progress from "easy-circular-progress";
import Donut from "vue-css-donut-chart";
import "vue-css-donut-chart/dist/vcdonut.css";
import skills from "../../data/skills.json";

Vue.use(Donut);
export default {
  name: "Introduction",
  components: {
    Progress,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      allSkills: skills,
    };
  },
};
</script>

<style  scoped>
.skills-wrapper {
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 250px;
}

.skill-label {
  font-weight: 300;
  color: black;
  text-align: center;
  margin-top: -73px;
  margin-left: -33px;
  font-family: "Ubuntu Condensed" !important;
}

.line {
  height: 4px;
  text-align: center;
  position: relative;
  background: #1e3c5f;
  border: 0;
  margin: 0 auto;
  width: 65px;
  margin-top: 6px;
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
.skill-object::v-deep .vue-circular-progress .circle .percent .dot {
  display: none;
}

.skill-object::v-deep .vue-circular-progress .circle .percent .percent__dec {
  display: none;
}
.skills-wrapper {
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
