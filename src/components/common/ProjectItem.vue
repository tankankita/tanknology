<template>
  <div class="project-item">
    <div class="project-item__wrapper">
      <div class="image">
        <img
          class="project-item__image"
          :src="require(`../../assets/${imageName}`)"
        />
        <div class="overlay" @click="onProjectClick">
          <div class="text">
            {{ infoLine1 }}
            <br />
            <br />
            {{ infoLine2 }}
            <br />
            <br />
            {{ infoLine3 }}
            <br />
          </div>
        </div>
      </div>
      <div class="project-item__name-tag" @click="onProjectClick()">
        <p class="project-item__name">
          <span>{{ projectName }}</span>
        </p>
      </div>
    </div>
    <div class="project-item__links-wrapper">
      <div class="project-item__github-button" @click="onProjectClick">GIT</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  props: {
    projectName: {
      type: String,
      default: "Title Unavailable",
    },
    githubLink: {
      type: String,
      default: null,
    },
    videoLink: {
      type: String,
      default: null,
    },
    imageName: {
      type: String,
      default: "",
    },
    infoLine1: {
      type: String,
      default: "",
    },
    infoLine2: {
      type: String,
      default: "",
    },
    infoLine3: {
      type: String,
      default: "",
    },
  },
  computed: {
    hasVideo() {
      return this.videoLink !== null && this.videoLink.length > 0;
    }
  },
  methods: {
    openVideoLink() {
      if (this.hasVideo) {
        window.open(this.videoLink, "_blank");
      } 
    },
    onProjectClick() {
      window.open(this.githubLink, "_blank");
    }
  },
};
</script>

<style scoped>

.project-item {
  z-index: 1;
  height:500px;
  width:300px;
  top: 0;
  transition: top ease 0.2s;
}

.project-item__wrapper {
  position: relative;
  transition: top ease 0.2s;
}

.project-item__wrapper:hover .project-item__name-tag {
  bottom: 0;
  top: 350px;
  transition: 0.5s ease;
}

.project-item__wrapper:hover .overlay {
  bottom: 0;
  height: 100%;
}

.project-item__name-tag:hover {
  cursor: pointer;
}

.project-item__name {
  color: black;
  font-size: 17px;
  margin-top: 4px;
  text-align: center;
}
.overlay {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: black;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
  opacity: 0.85;
  color: white;
  cursor: pointer;
}

.text {
  color: white;
  font-size: 15px;
  padding: 10%;
}

.project-item__image {
  width: 300px;
  height: 500px;
}



.image {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

.project-item__name-tag {
  transition: 0.5s ease;
  width: fit-content;
  font-weight: 600;;
  height: 7%;
  background: white;
  position: absolute;
  top: 35px;
  right: 0px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.project-links {
  width: 15%;
  height: 30px;
  margin: auto;
  margin-top: 10px;
}

.project-item__github-button {
    height: 50px;
    width: 100%;
    display: inline-block;
    background: #1d1d1de6;
    cursor: pointer;
    color: white;
    padding-top: 7px;
    text-align: center;
    font-size: 17px;
    font-weight: 600;
}

.github-icon {
  font-size: 40px;
}

.github-icon:hover {
  cursor: pointer;
  color: #087896;
}

.project-item__play-button {
    height: 40px;
    width: 42%;
    display: inline-block;
    background: #686868;
    cursor: pointer;
    border-radius: 10px;
    color: white;
    padding-top: 7px;
    text-align: center;
    font-size: 17px;
    margin-left: 20px;
}

.project-item__play-button--disable {
  background: #c4c4c4;
  cursor: no-drop;
  color: black;
}

</style>
