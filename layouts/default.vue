<template>
  <v-app id="app">
    <v-app-bar app outlined flat fixed>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon v-if="drawer">
          mdi-menu-open
        </v-icon>
        <v-icon v-else>
          mdi-menu
        </v-icon>
      </v-app-bar-nav-icon>
      <v-btn v-show="!$vuetify.breakpoint.smAndDown" class="font-weight-bold" text color="primary">
        <v-icon>mdi-account</v-icon>&nbsp;
        {{ $vuetify.lang.t('$vuetify.app.sign') }}
      </v-btn>
      <v-spacer />
      <v-text-field
        :placeholder="$vuetify.lang.t(placeholder)"
        solo
        rounded
        dense
        clearable
        hide-details
        prepend-inner-icon="mdi-magnify"
      />
      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon v-if="$vuetify.theme.dark">
          mdi-white-balance-sunny
        </v-icon>
        <v-icon v-else>
          mdi-moon-waxing-crescent
        </v-icon>
      </v-btn>
      <v-btn icon @click="translate">
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <!--      <v-list-item to="/sign" active-class="primary&#45;&#45;text" class="pt-8 pb-8 pl-5">-->
      <!--        <v-avatar color="primary">-->
      <!--          <v-icon>mdi-account</v-icon>-->
      <!--        </v-avatar>-->
      <!--        <v-list-item-content>-->
      <!--          <v-list-item-title class="font-weight-bold">-->
      <!--            {{ $vuetify.lang.t('$vuetify.app.sign') }}-->
      <!--          </v-list-item-title>-->
      <!--        </v-list-item-content>-->
      <!--      </v-list-item>-->
      <v-card tile flat class="pt-5 pb-5">
        <v-card-title class="pb-2">
          <v-icon large>
            mdi-account
          </v-icon>
          <v-btn text color="primary" class="font-weight-bold">
            {{ $vuetify.lang.t('$vuetify.app.sign') }}
          </v-btn>
        </v-card-title>
        <v-card-title class="pt-0">
          Your Username
        </v-card-title>
        <v-card-subtitle>Your email</v-card-subtitle>
        <v-card-text>
          here is your signature
        </v-card-text>
      </v-card>
      <v-divider />
      <v-list nav>
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
      <!--      <v-footer padless>-->
      <!--        <v-card flat tile class="primary pa-5">-->
      <!--          <v-card-title class="white&#45;&#45;text">-->
      <!--            west-coast-->
      <!--          </v-card-title>-->
      <!--          <v-card-text class="white&#45;&#45;text">-->
      <!--            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.-->
      <!--          </v-card-text>-->
      <!--        </v-card>-->
      <!--      </v-footer>-->
    </v-main>
    <s-top-back />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import STopBack from '~/components/STopBack.vue'

export default Vue.extend({
  name: 'DefaultLayout',
  components: { STopBack },
  data () {
    return {
      drawer: true,
      hidden: false,
      currentLocale: this.$vuetify.lang.current,
      links: [
        { name: 'app.home', icon: 'mdi-home-variant-outline', to: '/' },
        { name: 'app.search', icon: 'mdi-magnify', to: 'search' },
        { name: 'app.technology', icon: 'mdi-file-document-outline', to: '/technology' },
        { name: 'app.life', icon: 'mdi-flower-tulip-outline', to: '/life' },
        { name: 'life.travel', icon: 'mdi-train-car', to: '/life/travel' },
        { name: 'life.work', icon: 'mdi-hammer-wrench', to: '/life/work' },
        { name: 'app.about', icon: 'mdi-clipboard-account-outline', to: '/about' }
      ],
      placeholder: '$vuetify.app.placeholder'
    }
  },
  methods: {
    translate() {
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
