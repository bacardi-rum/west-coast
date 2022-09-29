import { NuxtAppOptions } from '@nuxt/types'

export default {
  beforeCreate () {
    if (!this.$store.state.user.root) {
      this.$router.push('/')
    }
  },
  beforeDestroy () {
    // this.$store.state
  }
} as NuxtAppOptions
