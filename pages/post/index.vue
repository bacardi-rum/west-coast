<template>
  <v-container class="pa-lg-10 pa-xl-10 pa-sm-8">
    <mavon-editor v-model="input" :toolbars="editorConfig" class="editor" @imgAdd="addImg" @save="save" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import editorConfig from '~/config/editor.config'
import root from '~/mixins/root'
import actionTypes from '~/store/.action-types'

export default Vue.extend({
  name: 'Post',
  mixins: [root],
  data () {
    return {
      input: '',
      editorConfig,
      saved: true
    }
  },
  created () {
    this.$store.dispatch(actionTypes.CREATE)
  },
  mounted () {},
  methods: {
    save (value: string) {
      this.$store.dispatch('save', {
        value,
        callback (status: boolean, msg: string) {
          status ? this.$toast.success(msg) : this.$toast.error(msg)
        }
      })
    },
    addImg (filename: string, file: File) {

    },
    handleClose () {
      if (!this.saved) {
        this.$store.dispatch(actionTypes.DELETE_TEMP_ID)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.editor {
  z-index: 0;
}
</style>
