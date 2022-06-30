<template>
  <v-dialog v-model="details" max-width="500">
    <template #activator="{on, attrs}">
      <!--              详情按钮-->
      <v-btn class="font-weight-bold" color="primary" text v-bind="attrs" v-on="on">
        {{ $vuetify.lang.t('$vuetify.home.technology.details') }}
      </v-btn>
    </template>
    <v-card class="text-center pb-5" flat>
      <!--              详情app bar-->
      <v-app-bar flat outlined>
        <!--                关闭按钮-->
        <v-app-bar-nav-icon @click="details = false">
          <v-icon>mdi-close</v-icon>
        </v-app-bar-nav-icon>
        <!--                标题-->
        <v-app-bar-title class="font-weight-bold">
          {{ $vuetify.lang.t('$vuetify.home.technology.details') }}
        </v-app-bar-title>
      </v-app-bar>
      <!--              头像-->
      <v-avatar size="80">
        <v-img :src="userInfo.avatar || '/vue_ts.webp'" />
      </v-avatar>
      <!--              信息-->
      <v-card-title class="text-h5 text-center">
        {{ userInfo.username }}
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SUserInfoDialog',
  props: {
    userInfo: {
      type: Object,
      required: true
    }
  },
  data () {
    return { details: false }
  }
})
</script>

<style scoped>

</style>
