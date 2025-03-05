<template>
  <div class="intro-wrapper">
    <div class="about-me">
      <div class="welcome">
        <div class="greeting">
          <vue-typed-js
            :strings="['Hello,', 'Bonjour,', 'Hola,', 'Olá,', 'Namaste', 'Здравейте']"
            :loop="true"
            :typeSpeed="100"
            :showCursor="false"
          >
            <h1 class="typing"></h1>
          </vue-typed-js>
        </div>

        <div class="bubble-animation" v-if="isWeb">
          <div class="blueLeaf" />
          <div class="greenLeaf" />
          <div class="pinkLeaf" />
        </div>
      </div>

      <div class="introduction">
        <br />
        {{ introParagraph1 }}
        <br />
        <br />
        {{ introParagraph2 }}
        
      </div>

      <div class="reachables">
        <i class="fa fa-linkedin-square reachable-icon" @click="openLinkedin" />
        <i class="fa fa-github reachable-icon" @click="openGithub" />

        <button class="download-button">
          <a class="resume-link" :href="pdfDownloadLink" download="Ankita-Tank-Resume.pdf">
            <span>Download Resume</span>
          </a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { VueTypedJs } from "vue-typed-js";

Vue.use(VueTypedJs);

export default {
  name: "Introduction",
  components: { VueTypedJs },
  data() {
    return {
      linkedInLink: "https://www.linkedin.com/in/ankitatank/",
      githubLink: "https://github.com/tankankita/",
      introParagraph1:
        "I am a Software Engineer with 8+ years of experience in full-stack development, specializing in Node.js, Vue.js, and React.js, alongside API development using Java, Python, and Ruby on Rails. Currently, I’m pursuing a Master’s in Artificial Intelligence at DePaul University, where I’m integrating AI and software engineering to build intelligent, scalable solutions.",
      introParagraph2:
        "My expertise extends to cloud computing (AWS, CI/CD, Docker, Kubernetes) and performance optimization, ensuring efficient and maintainable applications. Passionate about AI-driven development, I explore machine learning, NLP, and automation to enhance user experiences and streamline business workflows.",
    };
  },
  computed: {
    pdfDownloadLink() {
      return null; // Placeholder for actual PDF link
    },
    isWeb() {
      return window.innerWidth >= 700;
    },
  },
  methods: {
    openLinkedin() {
      window.open(this.linkedInLink, "_blank");
    },
    openGithub() {
      window.open(this.githubLink, "_blank");
    },
  },
};
</script>

<style scoped>
/* Main Layout */
.intro-wrapper {
  position: absolute;
  margin-top: 80px;
  width: 100%;
  height: 100%;
  padding: 2%;
}

/* Welcome Section */
.welcome {
  height: 140px;
  margin-top: 100px;
  color: white;
}

.greeting {
  display: flex;
  height: 140px;
  color: white;
}

.typing {
  font-size: 130px;
  font-family: "Courier New" !important;
}

/* Animated Bubbles */
.bubble-animation {
  margin-left: 200px;
}

.blueLeaf,
.greenLeaf,
.pinkLeaf {
  border-radius: 50%;
  height: 300px;
  width: 300px;
  position: absolute;
}

.blueLeaf {
  background: #52b6d0a3;
  margin-left: 53%;
  margin-top: -15%;
  animation: MoveUpDownLarge 10s linear infinite;
}

.greenLeaf {
  background: #66cdaa96;
  margin-left: 38%;
  animation: MoveUpDownLarge 6s linear infinite;
}

.pinkLeaf {
  background: #ffc0cb91;
  margin-left: 46%;
  margin-top: -4%;
  animation: MoveUpDownlittle 9s linear infinite;
}

/* Animations */
@keyframes MoveUpDownlittle {
  0%, 100% { bottom: 200px; }
  50% { bottom: 300px; }
}

@keyframes MoveUpDownLarge {
  0%, 100% { bottom: 400px; }
  50% { bottom: 550px; }
}

/* Introduction */
.about-me {
  margin: 0% 30% 0% 10%;
}

.introduction {
  font-size: 17px;
  color: white;
}

/* Social Icons & Resume Download */
.reachables {
  font-size: 40px;
  display: flex;
  margin-top: 50px;
  align-items: center;
}

.reachable-icon {
  font-size: 50px;
  cursor: pointer;
  padding: 10px;
  color: white;
}

/* Download Resume Button */
.download-button {
  font-family: "Courier New";
  border-radius: 15px;
  background-color: #fff;
  border: 1px black solid;
  font-size: 20px;
  width: 65%;
  cursor: pointer;
  margin-left: 10px;
  height: 40px;
  position: relative;
  margin-top: 14px;
  transition: 0.5s;
}

.download-button span {
  display: inline-block;
  transition: 0.5s;
}

.download-button span:after {
  content: "\2193";
  font-size: 1.6rem;
  margin-left: 10px;
  opacity: 0;
  transition: 0.5s;
}

.download-button:hover span {
  padding-right: 25px;
}

.download-button:hover span:after {
  opacity: 1;
}

.resume-link {
  font-weight: 600;
  color: #000;
}

/* Slide-in Animation */
.intro-wrapper {
  animation: 0.3s ease-out 0s 1 slideInFromLeft;
}

@keyframes slideInFromLeft {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}
</style>
