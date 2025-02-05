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
      <div class="project-item__github-button" @click="onProjectClick">GITHUB</div>
      <div class="project-item__play-button" 
      :class="{
				'project-item__play-button--disable': !hasVideo,
			}" @click="openVideoLink">DEMO</div>
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
  width: 300px;
  height: 500px;
  background: white;
  z-index: 1;
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
  width: 80%;
  height: 0;
  transition: 0.5s ease;
  margin: 0px 10% 0px 10%;
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
  width: 100%;
  height: 420px;
}



.image {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: black;
  width: 80%;
  height: auto;
  display: block;
  margin: 0px 10% 0px 10%;
}

.project-item__name-tag {
  transition: 0.5s ease;
  width: fit-content;

  height: 8%;
  background: white;
  position: absolute;
  top: 35px;
  right: 0px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.project-links {
  width: 15%;
  height: 30px;
  margin: auto;
  margin-top: 10px;
}

.video-link {
  width: 28%;
}

.video-icon {
  font-size: 30px;
  margin-left: 20px;
}

.video-icon:hover {
  cursor: pointer;
  color: #087896;
}


/* Links */

.project-item__links-wrapper {
  margin-top: 10px;
  padding-left: 60px;
  padding-right: 30px;
}

.project-item__github-button {
    height: 40px;
    width: 42%;
    display: inline-block;
    background: #204760;
    cursor: pointer;
    border-radius: 10px;
    color: white;
    padding-top: 7px;
    text-align: center;
    font-size: 17px;
    margin-left: -6px;
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
    background: #204760;
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
