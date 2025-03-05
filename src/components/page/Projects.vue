<template>
  <div class="projects-wrapper">
    <div class="project-header">
      PROJECTS
      <hr class="line" />
    </div>
    <div>
      <ProjectTypes @onProjectItemClick="setActiveType" />
    </div>
    <div class="projects-container">
      <div class="project-grid">
        <div
          class="project"
          v-for="(project) in projectList()"
          :key="project.projectName"
        >
          <ProjectItem
            :projectName="project.projectName"
            :githubLink="project.githubLink"
            :imageName="project.imageName"
            :infoLine1="project.infoLine1"
            :infoLine2="project.infoLine2"
            :infoLine3="project.infoLine3"
            :hasVideo="project.hasVideo"
            :videoLink="project.videoLink"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectItem from "../common/ProjectItem";
import Projects from "../../data/projects.json";
import ProjectTypes from "../common/ProjectType.vue";

export default {
  name: "Projects",
  components: {
    ProjectItem,
    ProjectTypes,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      allProjects: Projects,
      activeIndexType: "WEB",
    };
  },
  methods: {
    setActiveType(data) {
      this.activeIndexType = data.projectType;
    },
    projectList() {
      const list = Projects.filter(
        (project) => project.type === this.activeIndexType
      );
      return list;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projects-wrapper {
  position: absolute;
  margin-top: 80px;
  width: 100%;
  height: 100%;
  padding: 2%;
  padding-top: 0;
  animation: 0.3s ease-out 0s 1 slideInFromRight;
  background: #c4c4c4;
}


@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

.projects-container {
  width: 100%;
  height: 100%;
  padding: 5%;
}
.project-header {
  width: 100%;
  height: 100px;
  font-size: 34px;
  color: black;
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;
  margin-bottom: 16px;
  font-weight:600;
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

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 650px;
}

.project {
  width: 300px;
  height: 700px;
}
</style>
