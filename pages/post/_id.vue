<template>
  <v-container class="pa-lg-10 pa-xl-10 pa-sm-8">
    <mavon-editor
      v-model="input"
      :editable="false"
      :subfield="false"
      :toolbars="editorConfig"
      class="editor"
      default-open="preview"
    />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import editorConfig from '~/config/editor.config'

export default Vue.extend({
  name: 'Post',
  data () {
    return {
      input: this.$route.params.id,
      editorConfig
    }
  },
  computed: {}
})
</script>

<style lang="scss" scoped>
.editor {
  z-index: 0;
}
</style>
