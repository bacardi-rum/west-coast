<template>
  <v-container class="pa-lg-10 pa-xl-10 pa-sm-8">
    <v-row>
      <v-col cols="12">
        <v-card class="pt-16 pb-16 v-card--flag" flat height="500">
          <v-card-title class="text-h1 mb-5 font-weight-bold text-break">
            west coast
          </v-card-title>
          <v-card-subtitle>
            A blog & Tool website helps you learn new things & solve problems.<br>
            from a song by <i>Lana Del Rey</i>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <!--    <v-divider />-->
    <!--    articles-->
    <v-row>
      <v-col cols="12">
        <v-card flat>
          <v-card-title class="text-h4 font-weight-bold">
            {{ $vuetify.lang.t('$vuetify.app.technology') }}
            <v-btn icon large to="/technology" color="primary">
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="art in articles"
        :key="art.id"
        cols="12"
        xl="3"
        lg="4"
        sm="6"
      >
        <v-card>
          <v-img src="/vue_ts.webp" />
          <v-card-title class="text-h5 text-break font-weight-bold">
            {{ art.title }}
          </v-card-title>
          <v-card-actions>
            <v-btn text class="font-weight-bold" @click="art.reveal = true">
              {{ $vuetify.lang.t('$vuetify.home.technology.digest') }}
            </v-btn>
            <v-btn text class="font-weight-bold" color="primary">
              {{ $vuetify.lang.t('$vuetify.home.technology.details') }}
            </v-btn>
            <v-spacer />
            <v-chip outlined small color="error" class="mr-2">
              <v-icon small>
                mdi-cards-heart-outline
              </v-icon>&nbsp;&nbsp;{{ art.likes }}
            </v-chip>
            <v-chip outlined small class="mr-2">
              <v-icon small>
                mdi-comment-quote-outline
              </v-icon>&nbsp;&nbsp;{{ art.comments }}
            </v-chip>
          </v-card-actions>
          <v-expand-transition>
            <v-card
              v-if="art.reveal"
              flat
              class="transition-fast-in-fast-out v-card--reveal"
            >
              <v-card-title class="text-h5">
                {{ $vuetify.lang.t('$vuetify.home.technology.digest') }}
              </v-card-title>
              <v-card-text>
                {{ art.digest }}
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="primary"
                  class="font-weight-bold"
                  @click="art.reveal = false"
                >
                  {{ $vuetify.lang.t('$vuetify.home.technology.close') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    <!--    life-->
    <v-row>
      <v-col cols="12">
        <v-card flat>
          <v-card-title class="text-h4 font-weight-bold">
            {{ $vuetify.lang.t('$vuetify.app.life') }}
            <v-btn icon large to="/life" color="primary">
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-carousel />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="art in articles"
        :key="art.id"
        cols="12"
        xl="3"
        lg="4"
        sm="6"
      >
        <v-card>
          <v-img src="/vue_ts.webp" />
          <v-card-title class="text-h5 text-break font-weight-bold">
            {{ art.title }}
          </v-card-title>
          <v-card-actions>
            <v-btn text class="font-weight-bold" @click="art.reveal = true">
              {{ $vuetify.lang.t('$vuetify.home.technology.digest') }}
            </v-btn>
            <v-btn text class="font-weight-bold" color="primary">
              {{ $vuetify.lang.t('$vuetify.home.technology.details') }}
            </v-btn>
            <v-spacer />
            <v-chip outlined small color="error" class="mr-2">
              <v-icon small>
                mdi-cards-heart-outline
              </v-icon>&nbsp;&nbsp;{{ art.likes }}
            </v-chip>
            <v-chip outlined small class="mr-2">
              <v-icon small>
                mdi-comment-quote-outline
              </v-icon>&nbsp;&nbsp;{{ art.comments }}
            </v-chip>
          </v-card-actions>
          <v-expand-transition>
            <v-card
              v-if="art.reveal"
              flat
              class="transition-fast-in-fast-out v-card--reveal"
            >
              <v-card-title class="text-h5">
                {{ $vuetify.lang.t('$vuetify.home.technology.digest') }}
              </v-card-title>
              <v-card-text>
                {{ art.digest }}
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="primary"
                  class="font-weight-bold"
                  @click="art.reveal = false"
                >
                  {{ $vuetify.lang.t('$vuetify.home.technology.close') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xl="6" lg="6" sm="12" />
      <v-col cols="12" xl="6" lg="6" sm="12" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      articles: [
        { id: '111', title: 'How to Use Typescript in Vue & Vuetify to Build Your Website?', digest: 'aaaaaaaaaaaaaa', likes: 0, comments: 0, reveal: false },
        { id: '222', title: 'Test', digest: 'aaaaaaaaaaaaaa', likes: 0, comments: 0, reveal: false },
        { id: '333', title: 'Test', digest: 'aaaaaaaaaaaaaa', likes: 0, comments: 0, reveal: false },
        { id: '444', title: 'Test', digest: 'aaaaaaaaaaaaaa', likes: 0, comments: 0, reveal: false },
        { id: '555', title: 'Test', digest: 'aaaaaaaaaaaaaa', likes: 0, comments: 0, reveal: false }
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
  }
})
</script>
<style lang="scss" scoped>
.v-card--reveal {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 1 !important;
}

.v-card--flag {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //background: url("~/assets/bg.jpg");
  text-align: center;
}
</style>
