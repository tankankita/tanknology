<template>
  <div class="intro-wrapper">
    <div class="intro-header">
      ABOUT ME
      <hr class="line" />
    </div>
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
            <h1 class="typing mobile-typing"></h1>
          </vue-typed-js>
        </div>
        <hr class="greeting-line" />
        <div class="bubble-animation-web">
          <div v-if="isWeb" class="blueLeaf" />
          <div v-if="isWeb" class="greenLeaf" />
          <div v-if="isWeb" class="pinkLeaf" />
        </div>
      </div>

      <div class="introduction" :class="{ 'mobile-introduction': !isWeb }">
        {{ introParagraph1 }}
        <br />
        <br />
        {{ introParagraph2 }}
        
      </div>
      <div class="reachables">
        <div class="reachables__linkedIn-icon">
          <i class="fa fa-linkedin-square linkedIn-icon" @click="openLinkedin" />
        </div>

        <div class="reachables__github-icon">
          <i class="fa fa-github github-icon" @click="openGithub" />
        </div>
       
        <div class="reachables__instagram-icon">
          <i class="instagram" @click="openInstagram" /> 
        </div>

      </div>
      <button class="button" style="vertical-align: middle">
        <a
          class="resume-link"
          :href="pdfDownloadLink"
          download="Ankita-Tank-Resuume.pdf"
        >
          <span>Download Resume</span>
        </a>
      </button>
      <div class="bubble-animation">
        <div v-if="!isWeb" class="blueLeaf-mobile"></div>
        <div v-if="!isWeb" class="pinkLeaf-mobile"></div>
        <div v-if="!isWeb" class="greenLeaf-mobile"></div>
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
      introParagraph2:
        "I love structure, order, stand for quality and spend time on fixing minor details and optimizing complexity. My passion is to learn new arena of development and expand my knowledge/experience.",
      introParagraph1:
        "An experienced Senior Software Engineer working with Morningstar, Creative and highly organized professional with adequate knowledge about Object-Oriented Programming, Design Patterns. I have successfully demonstrated problem-solving skills and a proven track record with strong attention to detail.",
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
.blueLeaf-mobile {
  background: #52b6d0a3;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  animation: MoveUpDownLargeMobile 10s linear infinite;
  position: absolute;
  z-index: 4;
  margin-left: 22%;
}

/******************************************************************************************************/

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

.greenLeaf-mobile {
  background: #66cdaa96;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  animation: MoveUpDownlittleMobile 8s linear infinite;
  position: absolute;
  z-index: 4;
  margin-left: 35%;
}
/******************************************************************************************************/

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
.pinkLeaf-mobile {
  margin-top: -4%;
  background: #ffc0cb91;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  animation: MoveUpDownLargeMobile 9s linear infinite;
  position: absolute;
  z-index: 4;
  margin-left: 50%;
}

/******************************************************************************************************/

@keyframes MoveUpDownlittle {
  0%,
  100% {
    bottom: 200px;
  }
  50% {
    bottom: 300px;
  }
}

@keyframes MoveUpDownlittleMobile {
  0%,
  100% {
    bottom: -300px;
  }
  50% {
    bottom: -260px;
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

@keyframes MoveUpDownLargeMobile {
  0%,
  100% {
    bottom: -200px;
  }
  50% {
    bottom: -150px;
  }
}

/******************************************************************************************************/

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
}
.welcome {
  height: 230px;
  margin-top: 100px;
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
  height: 200px;
}
.typing {
  font-size: 130px;
}
.mobile-typing {
  font-size: 90px;
  font-family: "Ubuntu Condensed" !important;
}
.about-me {
  margin: 0% 30% 0% 30%;
}
.introduction {
  display: block;
  font-size: 17px;
  color: #087896;
  height: fit-content;
}

.mobile-introduction {
  text-align: justify;
}

.greeting-line {
  height: 2px;
  width: 250px;
  text-align: center;
  position: absolute;
  background: #5c5c5c;
  border: 0;
}

.button {
  font-family: "Ubuntu Condensed";
  border-radius: 15px;
  background-color: #fff;
  border: 1px black solid;
  font-size: 18px;
  width: 100%;
  transition: all 0.5s;
  cursor: pointer;
  height: 40px;
  margin-top: 30px;
}
.resume-link {
  color: #000;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: "\2193";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

.reachables {
  font-size: 40px;
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: center;
  margin-top: 30px;
}
.linkedIn-icon {
  font-size: 50px;
  color: #0077b5;
  cursor: pointer;
  padding: 10px;
}

.github-icon {
  font-size: 50px;
  cursor: pointer;
  padding: 10px;
}

:root {
  --size: 50vmin;
  --white: #fff;
  --blue: #3051f1;
  --purple: #c92bb7;
  --red: #f73344;
  --orange: #fa8e37;
  --yellow: #fcdf8f;
  --yellow_to: #fbd377;
}

.instagram {
  cursor: pointer;
  font-size: 43px;
  margin-top: 13px;
  margin-left: 10px;
  width: 1em;
  aspect-ratio: 1;
  background: radial-gradient(circle farthest-corner at 28% 100%, #fcdf8f 0%, #fbd377 10%, #fa8e37 22%, #f73344 35%, transparent 65%), linear-gradient(145deg, #3051f1 10%, #c92bb7 70%);
  border-radius: 0.2em;
  position: relative;
  display: grid;
  place-items: center;
}
.instagram:before, .instagram:after {
  content: "";
  color: #fff;
  position: absolute;
  border-radius: inherit;
  aspect-ratio: 1;
}
.instagram:before {
  border: 0.05em solid;
  width: 65%;
}
.instagram:after {
  border-radius: 50%;
  border: 0.05em solid;
  width: 35%;
  box-shadow: 0.22em -0.22em 0 -0.18em;
}

.instagram-icon {
  font-size: 50px;
  color: #0077b5;
  cursor: pointer;
  padding: 10px;
}

.intro-wrapper {
  animation: 0.3s ease-out 0s 1 slideInFromLeft;
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
