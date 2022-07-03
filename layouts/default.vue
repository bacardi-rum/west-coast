<template>
  <v-app id="app">
    <!--    main app bar-->
    <s-main-app-bar :drawer="drawer" @drawer="drawer = !drawer" />
    <!--    左侧导航栏-->
    <v-navigation-drawer v-model="drawer" app>
      <!--      用户信息摘要-->
      <s-user-info-card @logout="drawer = false" />
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
        <v-card class="pa-5 flex-grow-1" flat tile>
          <v-card-title>
            west-coast
          </v-card-title>
          <v-card-subtitle>
            你可以从这个博客获取一些有用的，没用的，或者不管什么东西。希望能够帮到你。你也可以向我的邮箱留言，可以提建议或者寻求帮助。<br>
            邮箱：<a href="mailto:shencong2001@live.cn">shencong2001@live.cn</a><br>
            项目地址：
            <a href="https://github.com/Cinnamon-code/west-coast" target="_blank">
              github.com/Cinnamon-code/west-coast
            </a>
          </v-card-subtitle>
          <v-card-text>
            鲁ICP备2022019200号
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
