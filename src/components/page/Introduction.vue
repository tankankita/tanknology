<template>
  <div class="intro-wrapper">
    <div class="about-me">
      <div class="welcome">
        <div class="greeting">
          <vue-typed-js
            :strings="[
              'Hello,',
              'Bonjour,',
              'Hola,',
              'Olá,',
              'Namaste',
              'Здравейте',
            ]"
            :loop="true"
            :typeSpeed="100"
            :showCursor="false"
          >
            <h1 class="typing"></h1>
          </vue-typed-js>
        </div>
        <div class="bubble-animation-web">
          <div v-if="isWeb" class="blueLeaf" />
          <div v-if="isWeb" class="greenLeaf" />
          <div v-if="isWeb" class="pinkLeaf" />
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
        <div>
          <i class="fa fa-linkedin-square reachable-icon" @click="openLinkedin" />
        </div>

        <div>
          <i class="fa fa-github reachable-icon" @click="openGithub" />
        </div>

        <button class="download-button" style="vertical-align: middle">
          <a
            class="resume-link"
            :href="pdfDownloadLink"
            download="Ankita-Tank-Resume.pdf">
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
  components: {
    VueTypedJs,
  },
  data() {
    return {
      linkedInLink: "https://www.linkedin.com/in/ankitatank/",
      githubLink: "https://github.com/tankankita/",
      instagramLink: "https://instagram.com/_tanknology?igshid=YmMyMTA2M2Y=",
      introParagraph1: "I am a Software Engineer with 8+ years of experience in full-stack development, specializing in Node.js, Vue.js, and React.js, alongside API development using Java, Python, and Ruby on Rails. Currently, I’m pursuing a Master’s in Artificial Intelligence at DePaul University, where I’m integrating AI and software engineering to build intelligent, scalable solutions.",
      introParagraph2:"My expertise extends to cloud computing (AWS, CI/CD, Docker, Kubernetes) and performance optimization, ensuring efficient and maintainable applications. Passionate about AI-driven development, I explore machine learning, NLP, and automation to enhance user experiences and streamline business workflows. I thrive on solving complex problems, mentoring developers, and building impactful products. 🚀"
    };
  },
  computed: {
    pdfDownloadLink() {
      // convert the resume pdf to base64 
      // return "data:application/pdf;base64," + this.pdfLink;
      return null;
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
    openInstagram() {
      window.open(this.instagramLink, "_blank");
    },
  },
};
</script>

<style scoped>
.blueLeaf {
  background: #52b6d0a3;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  margin-left: 53%;
  margin-top: -15%;
  animation: MoveUpDownLarge 10s linear infinite;
  position: absolute;
  z-index: 4;
}

.greenLeaf {
  background: #66cdaa96;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  margin-left: 38%;
  animation: MoveUpDownLarge 6s linear infinite;
  position: absolute;
  z-index: 2;
}

.pinkLeaf {
  margin-top: -4%;
  background: #ffc0cb91;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  margin-left: 46%;
  animation: MoveUpDownlittle 9s linear infinite;
  position: absolute;
  z-index: 1;
}


@keyframes MoveUpDownlittle {
  0%,
  100% {
    bottom: 200px;
  }
  50% {
    bottom: 300px;
  }
}

@keyframes MoveUpDownLarge {
  0%,
  100% {
    bottom: 400px;
  }
  50% {
    bottom: 550px;
  }
}

.intro-wrapper {
  position: absolute;
  margin-top: 80px;
  width: 100%;
  height: 100%;
  padding: 2%;
  padding-top: 0;
}
.intro-header {
  width: 100%;
  height: 100px;
  font-size: 34px;
  color: black;
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;
  color: white
}
.welcome {
  height: 140px;
  margin-top: 100px;
  color: white
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
.greeting {
  display: flex;
  height: 140px;
  color: white;
}
.typing {
  font-size: 130px;
  font-family: "Courier New" !important;
}

.about-me {
  margin: 0% 30% 0% 10%;;
}
.introduction {
  display: block;
  font-size: 17px;
  color: white;
  height: fit-content;
}

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
}

.download-button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
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
  right: 0;
}

.resume-link {
  font-weight: 600;
  color: #000;
}


.reachables {
  font-size: 40px;
  display: flex;
  margin-top: 50px;
}

.reachable-icon {
  font-size: 50px;
  cursor: pointer;
  padding: 10px;
  color:white;
}

.intro-wrapper {
  animation: 0.3s ease-out 0s 1 slideInFromLeft;
}

.bubble-animation-web{
  margin-left: 200px;

}
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
