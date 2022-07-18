<template>
  <v-container class="pa-lg-10 pa-xl-10 pa-sm-8">
    <s-flag>
      <template #title>
        west coast
      </template>
      A blog & Tool website helps you learn new things & solve problems.<br>from a song by <i>Lana Del Rey</i>
    </s-flag>
    <!--    articles-->
    <s-header title="app.technology" to="/technology" />
    <v-row>
      <v-col
        v-for="art in articles"
        :key="art.id"
        cols="12"
        lg="4"
        sm="6"
        xl="3"
      >
        <s-card :info="art" max-height="376" min-height="376" type="technology" />
      </v-col>
    </v-row>
    <!--    life-->
    <s-header title="app.life" to="/life" />
    <v-row>
      <v-col cols="12">
        <v-lazy>
          <v-carousel />
        </v-lazy>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="art in articles.slice(0, 3)"
        :key="art.id"
        cols="12"
        xl="3"
        lg="4"
        sm="6"
      >
        <s-card :info="art" max-height="376" min-height="376" type="life" />
      </v-col>
    </v-row>
    <!--    travel-->
    <s-header title="life.travel" to="/life/travel" />
    <v-row>
      <v-col cols="12">
        <v-lazy>
          <v-carousel />
        </v-lazy>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="art in articles.slice(0, 3)"
        :key="art.id"
        cols="12"
        lg="4"
        sm="6"
        xl="3"
      >
        <s-card :info="art" max-height="376" min-height="376" type="life" />
      </v-col>
    </v-row>
    <!--    work-->
    <s-header title="life.work" to="/life/work" />
    <v-row>
      <v-col cols="12">
        <v-lazy>
          <v-carousel />
        </v-lazy>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="art in articles.slice(0, 3)"
        :key="art.id"
        cols="12"
        xl="3"
        lg="4"
        sm="6"
      >
        <s-card :info="art" max-height="376" min-height="376" type="life" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data () {
    return {
      articles: [
        {
          id: '111',
          title: 'How to Use Typescript in Vue & Vuetify to Build Your Website?',
          digest: 'aaaaaaaaaaaaaa',
          likes: 0,
          comments: 0,
          cover: '/vue_ts.webp',
          reveal: false
        },
        {
          id: '222',
          title: 'Test',
          digest: 'aaaaaaaaaaaaaa',
          likes: 0,
          comments: 0,
          reveal: false
        },
        {
          id: '333',
          title: 'Test',
          digest: 'aaaaaaaaaaaaaa',
          likes: 0,
          comments: 0,
          reveal: false
        },
        {
          id: '444',
          title: 'Test',
          digest: 'aaaaaaaaaaaaaa',
          likes: 0,
          comments: 0,
          reveal: false
        },
        {
          id: '555',
          title: 'Test',
          digest: 'aaaaaaaaaaaaaa',
          likes: 0,
          comments: 0,
          reveal: false
        }
      ],
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star'
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant'
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon'
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer'
        }]
    }
  },
  head () {
    return { title: 'Home - west coast' }
  }
})
</script>
<style lang="scss" scoped>

</style>
