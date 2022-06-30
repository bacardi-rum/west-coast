<template>
  <v-app id="app">
    <!--    main app bar-->
    <s-main-app-bar :drawer="drawer" @drawer="drawer = !drawer" />
    <!--    左侧导航栏-->
    <v-navigation-drawer v-model="drawer" app>
      <!--      用户信息摘要-->
      <s-user-info-card :user-info="userInfo" @logout="drawer = false" />
      <v-divider />
      <v-list nav>
        <!--        导航项-->
        <v-list-item v-for="link in links" :key="link.name" :to="link.to" active-class="primary--text">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              {{ $vuetify.lang.t(`$vuetify.${link.name}`) }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
      <v-divider class="mt-10" />
      <!--      页脚-->
      <v-footer padless>
        <v-card class="pa-5" flat tile>
          <v-card-title>
            west-coast
          </v-card-title>
          <v-card-text>
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent
            ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet
            dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>
        </v-card>
      </v-footer>
    </v-main>
    <s-top-back />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
  data () {
    return {
      drawer: true,
      hidden: false,
      details: false,
      links: [
        {
          name: 'app.home',
          icon: 'mdi-home-variant-outline',
          to: '/'
        },
        {
          name: 'app.search',
          icon: 'mdi-magnify',
          to: '/search'
        },
        {
          name: 'app.technology',
          icon: 'mdi-file-document-outline',
          to: '/technology'
        },
        {
          name: 'app.life',
          icon: 'mdi-flower-tulip-outline',
          to: '/life'
        },
        {
          name: 'life.travel',
          icon: 'mdi-train-car',
          to: '/life/travel'
        },
        {
          name: 'life.work',
          icon: 'mdi-hammer-wrench',
          to: '/life/work'
        },
        {
          name: 'app.about',
          icon: 'mdi-clipboard-account-outline',
          to: '/about'
        }
      ]
    }
  },
  computed: {
    userInfo () { return this.$store.state.user }
  },
  methods: {
    translate () {
      this.$vuetify.lang.current = this.currentLocale === 'zhHans' ? 'en' : 'zhHans'
      this.currentLocale = this.$vuetify.lang.current
    }
  }
})
</script>
<style lang="scss" scoped>
//.v-app-bar {
//  background-color: transparent !important;
//  backdrop-filter: blur(10px) !important;
//  -webkit-backdrop-filter: blur(10px) !important;
//}
</style>
