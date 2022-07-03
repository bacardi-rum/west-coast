<template>
  <v-container class="pa-lg-10 pa-xl-10 pa-sm-8 pa-md-8">
    <v-row>
      <v-col cols="12" lg="6" md="6" sm="12" xl="6">
        <v-select
          v-model="sort"
          :dense="!$vuetify.breakpoint.smAndDown"
          :items="sorting"
          hide-details
          label="Sorting"
          outlined
          rounded
        />
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12" xl="6">
        <v-select
          v-model="cate"
          :dense="!$vuetify.breakpoint.smAndDown"
          :items="categories"
          hide-details
          label="Categories"
          outlined
          rounded
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <nuxt-child :cate="cate" :sort="sort" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Search',
  data () {
    return {
      sort: 'td',
      cate: 'all',
      sorting: [
        {
          header: 'Time',
          disabled: true
        },
        {
          text: 'Time Descending',
          value: 'td'
        },
        {
          text: 'Time Ascending',
          value: 'ta'
        },
        {
          header: 'Likes',
          disabled: true
        },
        {
          text: 'Likes Descending',
          value: 'ld'
        },
        {
          text: 'Likes Ascending',
          value: 'la'
        },
        {
          header: 'Comments',
          disabled: true
        },
        {
          text: 'Comments Descending',
          value: 'cd'
        },
        {
          text: 'Comments Ascending',
          value: 'ca'
        }
      ],
      categories: [
        {
          text: 'All',
          value: 'all'
        },
        {
          text: 'Technology',
          value: 'technology'
        },
        {
          text: 'Life',
          value: 'life'
        },
        {
          text: 'Travel',
          value: 'travel'
        },
        {
          text: 'Work',
          value: 'work'
        }
      ]
    }
  },
  head () {
    return { title: 'Search - west coast' }
  }
})
</script>

<style scoped>

</style>
