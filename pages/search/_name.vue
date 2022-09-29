<template>
  <v-row>
    <v-col
      v-for="art in results"
      :key="art._id"
      cols="12"
      lg="4"
      sm="6"
      xl="3"
    >
      <s-card :info="art" :type="art.category" min-height="300" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { Article } from '~/models'

export default Vue.extend({
  name: 'SearchNamePage',
  props: {
    sort: {
      type: String,
      required: true
    },
    cate: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    results (): Article[] {
      const name = this.$route.params.name ?? ''
      const arts = [...this.$store.state.articles] as Article[]
      return arts
        .filter(art => (this.cate === 'all' ? true : art.category === this.cate) && !art.temp && (art.title.includes(name) || art.digest.includes(name)))
        .sort((a, b) => {
          switch (this.sort) {
            case 'td':
              return +new Date(b.updated) - +new Date(a.updated)
            case 'ta':
              return +new Date(a.updated) - +new Date(b.updated)
            case 'ld':
              return b.likes - a.likes
            case 'la':
              return a.likes - b.likes
            case 'cd':
              return b.comments - a.comments
            case 'ca':
              return a.comments - b.comments
          }
          return 0
        })
        .map(art => ({
          ...art,
          reveal: false
        }))
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
