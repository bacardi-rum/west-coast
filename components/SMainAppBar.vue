<template>
  <v-app-bar app fixed flat outlined>
    <v-app-bar-nav-icon @click.stop="$emit('drawer')">
      <v-icon v-if="drawer">
        mdi-menu-open
      </v-icon>
      <v-icon v-else>
        mdi-menu
      </v-icon>
    </v-app-bar-nav-icon>
    <!--      登陆界面-->
    <s-login-full-dialog
      v-if="!$vuetify.breakpoint.smAndDown && !$store.state.login"
      :key="$vuetify.lang.t('$vuetify.sign.in')"
    />
    <v-spacer />
    <!--      搜索框-->
    <v-text-field
      :placeholder="$vuetify.lang.t(placeholder)"
      clearable
      dense
      hide-details
      prepend-inner-icon="mdi-magnify"
      rounded
      solo
    />
    <!--      切换主题按钮-->
    <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
      <v-icon v-if="$vuetify.theme.dark">
        mdi-white-balance-sunny
      </v-icon>
      <v-icon v-else>
        mdi-moon-waxing-crescent
      </v-icon>
    </v-btn>
    <!--      切换语言按钮-->
    <v-btn icon @click="translate">
      <v-icon>mdi-translate</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SMainAppBar',
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      currentLocale: this.$vuetify.lang.current,
      placeholder: '$vuetify.app.placeholder'
    }
  },
  methods: {
    translate () {
      this.$vuetify.lang.current = this.currentLocale === 'zhHans' ? 'en' : 'zhHans'
      this.currentLocale = this.$vuetify.lang.current
    }
  }
})
</script>

<style scoped>

</style>
