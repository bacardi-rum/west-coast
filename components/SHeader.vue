<template>
  <v-row>
    <v-col cols="12">
      <v-card flat>
        <v-card-title class="text-h4 font-weight-bold">
          {{ $vuetify.lang.t(`$vuetify.${title}`) }}
          <v-btn :to="to" color="primary" icon large>
            <v-icon>
              mdi-arrow-right
            </v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
