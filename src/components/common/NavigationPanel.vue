<template>
    <div class="navigation-panel-mobile" v-if="!isWeb">
        <div class="full-width-name">ANKITA TANK</div>
          <div class="full-width-navbar">
            <nav class="scene_nav-mobile">
              <ol class="scene_nav_list">
                <li
                  class="scene_nav_item"
                  v-for="(params, index) in maxScene"
                  :key="index"
                >
                  <button
                    class="scene_nav_button"
                    @click="selectedView(index)"
                    :class="{ 'o-active': isActiveScene(index) }"
                  >
                    <div v-if="isActiveScene(index)" class="active-button-text">
                     <p> {{ navButtonsText[index] }} </p> 
                    </div>

                    <div v-else class="inactive-button-icon">
                      <i class="fa icon inactive-icon" :class="getIcon(index)"></i>
                    </div>
                  </button>
                </li>
              </ol>
            </nav>
          </div>
      </div>
    
    <div class="navigation-panel" v-else>
      <div style="width: 100%; overflow: hidden">
        <div class="web-name">ANKITA TANK</div>
        <div class="web-navbar">
          <nav class="scene_nav-web">
            <ol class="scene_nav_list">
              <li
                class="scene_nav_item"
                v-for="(params, index) in maxScene"
                :key="index"
              >
                <button
                  class="scene_nav_button"
                  @click="selectedView(index)"
                  :class="{ 'o-active': isActiveScene(index) }"
                >
                  <div v-if="isActiveScene(index)" class="active-button-text">
                     <i
                      class="fa icon nav-active-icon"
                      :class="getIcon(index)"
                    > </i> 
                    {{ navButtonsText[index] }}
        
                  </div>

                  <div v-else class="inactive-button-icon">
                    <i
                      class="fa icon inactive-icon"
                      :class="getIcon(index)"></i>
                  </div>
                </button>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
</template>

<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

<script>
export default {
  components: {},
  data() {
    return {
      scene: 0,
      maxScene: 4,
      navButtonsText: ["HOME", "EXPERIENCE", "PROJECTS", "SKILLS"],
      navButtonsIcon: [
        "fa-home",
        "fas fa-briefcase",
        "fas fa-code",
        "fa fa-pie-chart",
      ],
    };
  },
  methods: {
    selectedView(index) {
      this.scene = index;
      this.$emit("newViewSelected", index);
    },
    isActiveScene(index) {
      return this.scene - 1 === index - 1;
    },
    getIcon(index) {
      return this.navButtonsIcon[index];
    },
  },
  computed: {
    isWeb() {
      return window.innerWidth >= 700;
    },
  },
  mounted() {
    setTimeout(() => {
      this.scene = 0;
    }, 1000);
  },
};
</script>

<style scoped>

.web-name {
  color: black;
  font-size: 30px;
  width: 50%;
  float: left;
  padding: 0.8%;
  padding-left: 7%;
}
.web-navbar {
  margin-left: 50%;
  height: 80px;
}
.navigation-panel {
  width: 100%;
  z-index: 1;
  background: white;
  height: 70px;
}

.scene_nav-web {
  display: inline-block;
  margin: 0 auto;
  margin-top: -2px;
  float: right;
  padding-right: 60px;
  padding-top: 13px;
}

.scene_nav-mobile {
  display: inline-block;
  margin: 0 auto;
}
.scene_nav_list {
  display: flex;
  margin: 0;
  padding: 0;
}
.scene_nav_item {
  display: block;
  margin-left: 10px;
}

.scene_nav_button {
  width: 50px;
  height: 50px;
  background: gray;
  cursor: pointer;
  border-radius: 15PX;
}

.scene_nav_button.o-active {
  width: 200px;
  background: #1d1d1de6;  
}
.scene_nav_button:hover {
  background: black;
}

.active-button-text {
  font-size: 22px;
  font-weight: 500;
  color: white;
  font-family: "Courier New" !important;
}

.inactive-icon {
  color: white;
  font-size: 23px;
}
.full-width-name {
  width: 100%;
  height: 40px;
  left: 0;
  color: white;
  font-size: 27px;
  text-align: center;
  border-bottom: solid 1px #828282;
}
.full-width-navbar {
  width: 100%;
  height: 50px;
  text-align: center;
  margin-top: 13px;
}

.nav-active-icon {
  font-size: 25px;
  margin-top: 3px;
}

</style>
