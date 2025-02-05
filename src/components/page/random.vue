


<template>
  <v-app id="inspire">
    <v-timeline :dense="true" class="timeline-wrapper">
      <v-timeline-item small>
        <template v-slot:opposite>
          <span :v-text="2000"></span>
        </template>
        <div class="py-4">
          <h2>Lorem ipsum</h2>
          <div>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-app>
</template>