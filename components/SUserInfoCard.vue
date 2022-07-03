<template>
  <v-card flat tile>
    <v-card-title class="pb-2">
      <v-avatar>
        <v-img v-if="userInfo.avatar" :src="userInfo.avatar" />
        <v-icon v-else x-large>
          mdi-account
        </v-icon>
      </v-avatar>
      <!--          登陆界面-->
      <s-login-full-dialog
        v-if="$vuetify.breakpoint.smAndDown && !$store.state.login"
        :key="$vuetify.lang.t('$vuetify.sign.in')"
        :icon="false"
      />
      <!--          登出按钮-->
      <v-btn v-if="$store.state.login" class="font-weight-bold" color="primary" text @click="logout">
        {{ $vuetify.lang.t('$vuetify.sign.out') }}
      </v-btn>
    </v-card-title>
    <!--        用户名-->
    <v-card-title class="pt-0">
      {{ userInfo.username || $vuetify.lang.t('$vuetify.sign.username') }}
    </v-card-title>
    <!--        邮箱-->
    <v-card-subtitle>{{ userInfo.email || $vuetify.lang.t('$vuetify.sign.email') }}</v-card-subtitle>
    <!--        个性签名-->
    <v-card-text>
      {{ userInfo.signature || $vuetify.lang.t('$vuetify.sign.signature') }}
    </v-card-text>
    <v-card-actions v-if="$store.state.login">
      <!--          用户信息详情-->
      <s-user-info-dialog :user-info="userInfo" />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import mutationTypes from '~/store/.mutation-types'

export default Vue.extend({
  name: 'SUserInfoCard',
  computed: {
    userInfo () { return this.$store.state.user }
  },
  methods: {
    logout () {
      this.$store.commit(mutationTypes.LOG_OUT)
      this.$vuetify.breakpoint.smAndDown && this.$emit('logout')
      this.$toast.show(`${this.$vuetify.lang.t('$vuetify.sign.bye')}~`, {
        className: 'toast'
      })
    }
  }
})
</script>

<style scoped>

</style>
