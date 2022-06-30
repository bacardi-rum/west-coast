<template>
  <v-lazy>
    <v-card :loading="loading" elevation="2" v-bind="$attrs">
      <v-img :alt="model.title" :src="model.cover" @load="loading = false" />
      <v-divider />
      <v-card-title class="text-h5 text-break font-weight-bold">
        <nuxt-link :to="`/${type}/${model.id}`" class="art-link">
          {{ model.title }}
        </nuxt-link>
      </v-card-title>
      <v-card-actions>
        <v-btn class="font-weight-bold" color="primary" text @click="model.reveal = true">
          {{ $vuetify.lang.t('$vuetify.home.technology.digest') }}
        </v-btn>
        <v-spacer />
        <v-chip class="mr-2" color="error" outlined small>
          <v-icon small>
            mdi-cards-heart-outline
          </v-icon>&nbsp;&nbsp;{{ model.likes }}
        </v-chip>
        <v-chip class="mr-2" outlined small>
          <v-icon small>
            mdi-comment-quote-outline
          </v-icon>&nbsp;&nbsp;{{ model.comments }}
        </v-chip>
      </v-card-actions>
      <v-expand-transition>
        <v-card
          v-if="model.reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          flat
        >
          <v-card-title class="text-h5 font-weight-bold">
            {{ $vuetify.lang.t('$vuetify.home.technology.digest') }}
          </v-card-title>
          <v-card-text>
            {{ model.digest }}
          </v-card-text>
          <v-card-actions>
            <v-btn
              class="font-weight-bold"
              color="primary"
              text
              @click="model.reveal = false"
            >
              {{ $vuetify.lang.t('$vuetify.home.technology.close') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
  </v-lazy>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SCard',
  props: {
    info: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      model: this.info as { id: string, title: string, digest: string, likes: number, comments: number, cover: string, reveal: boolean },
      loading: true
    }
  },
  created () {
    // 如果5s内图片还未加载出来，结束加载
    setTimeout(() => { this.loading = false }, 5000)
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

.art-link {
  color: inherit !important;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
