<template>
  <v-dialog v-model="details" max-width="500" @click:outside="onClose" @keydown.esc="onClose">
    <template #activator="{on, attrs}">
      <!--              详情按钮-->
      <v-btn
        class="font-weight-bold"
        color="primary"
        text
        v-bind="attrs"
        v-on="on"
      >
        {{ $vuetify.lang.t('$vuetify.home.technology.details') }}
      </v-btn>
    </template>
    <v-card class="pb-5" flat>
      <!--              详情app bar-->
      <v-app-bar flat outlined>
        <!--                关闭按钮-->
        <v-app-bar-nav-icon @click="onClose">
          <v-icon>mdi-close</v-icon>
        </v-app-bar-nav-icon>
        <!--                标题-->
        <v-app-bar-title class="font-weight-bold">
          {{ $vuetify.lang.t('$vuetify.home.technology.details') }}
        </v-app-bar-title>
      </v-app-bar>
      <!--              头像-->
      <v-card-title class="justify-center">
        <v-avatar class="mt-5 avatar" size="80" @click="selectFile">
          <v-img v-if="userInfo.avatar" :src="userInfo.avatar" />
          <v-icon v-else x-large>
            mdi-account
          </v-icon>
        </v-avatar>
        <input
          ref="avatarUploader"
          accept="image/jpeg"
          hidden
          name="avatar"
          type="file"
          @change="upload"
        >
      </v-card-title>
      <!--              信息-->
      <v-card-title class="justify-center pt-0">
        {{ userInfo.username }}
      </v-card-title>
      <v-card-subtitle class="text-center">
        {{ userInfo.email }}<br>
        {{ userInfo.website || '' }}
      </v-card-subtitle>
      <v-card-text class="pb-2">
        <v-textarea
          v-model="signature"
          :disabled="disabled"
          :placeholder="$vuetify.lang.t('$vuetify.sign.signature')"
          append-outer-icon="mdi-format-quote-close"
          auto-grow
          class="pt-0"
          counter
          hide-details
          prepend-icon="mdi-format-quote-open"
          solo
        />
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn class="font-weight-bold text-h6" color="primary" text @click="handleEditOrSave">
          {{ disabled ? 'edit' : 'save' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import actionTypes from '~/store/.action-types'
import * as payloadTypes from '~/store/.payload-types'

export default Vue.extend({
  name: 'SUserInfoDialog',
  props: {
    userInfo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      details: false,
      signature: this.userInfo.signature ?? '',
      disabled: true
    }
  },
  methods: {
    save () {
      if (!this.disabled) {
        this.$store.dispatch(actionTypes.SIGNATURE, {
          _id: this.userInfo._id,
          signature: this.signature,
          callback: (status: boolean, msg: string) => {
            status && (this.disabled = true)
            status ? this.$toast.success(msg) : this.$toast.error(msg)
          }
        } as payloadTypes.Signature)
      }
    },
    handleEditOrSave () {
      if (this.disabled) {
        this.disabled = false
      } else {
        this.save()
      }
    },
    onClose () {
      this.details = false
      this.save()
    },
    selectFile () { (this.$refs.avatarUploader as HTMLInputElement).click() },
    upload (e: Event) {
      const files = (e.target as HTMLInputElement).files
      if (files && files.length > 0) {
        const formData = new FormData()
        formData.set('avatar', files[0])
        formData.set('_id', this.userInfo._id)
        this.$store.dispatch(actionTypes.UPLOAD_AVATAR, {
          avatar: formData,
          callback: (status: boolean, msg: string) => status ? this.$toast.success(msg) : this.$toast.error(msg)
        } as payloadTypes.UploadAvatar)
      }
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
