<template>
  <v-fab-transition>
    <v-btn
      v-show="show"
      bottom
      color="primary"
      fab
      fixed
      right
      @click="topBack"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'STopBack',
  data () {
    return {
      show: false
    }
  },
  mounted () {
    window.onscroll = () => {
      this.show = window.scrollY > 0
    }
  },
  destroyed () {
    window.onscroll = null
  },
  methods: {
    topBack () {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
})
</script>

<style scoped>

</style>
