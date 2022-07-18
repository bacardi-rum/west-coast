<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <template #activator="{ on, attrs }">
      <v-btn class="font-weight-bold" color="primary" text v-bind="attrs" v-on="on">
        <v-icon v-if="icon">
          mdi-account
        </v-icon>
        {{ $vuetify.lang.t('$vuetify.app.sign') }}
      </v-btn>
    </template>
    <v-card class="align-center justify-center d-flex">
      <v-app-bar fixed flat outlined>
        <v-app-bar-nav-icon @click="onClose">
          <v-icon>mdi-close</v-icon>
        </v-app-bar-nav-icon>
        <v-app-bar-title class="font-weight-bold">
          {{ $vuetify.lang.t('$vuetify.app.sign') }}
        </v-app-bar-title>
      </v-app-bar>
      <v-container class="pt-16 d-flex align-center">
        <v-row>
          <v-col class="d-flex align-center justify-center pa-0" cols="12" lg="6" sm="12" xl="5">
            <v-card flat>
              <v-card-title class="text-h1 font-weight-bold text-break text-center">
                west coast
              </v-card-title>
              <v-card-subtitle class="text-center text-break">
                A blog & Tool website helps you learn new things & solve problems.<br>
                From a song by <i>Lana Del Rey</i>
              </v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="12" lg="6" sm="12" xl="7">
            <v-form ref="form" class="d-flex align-center flex-column">
              <v-text-field
                v-model="username"
                :label="$vuetify.lang.t('$vuetify.sign.username')"
                :rules="isLogin ? [rules.required] : [rules.required, ...rules.username]"
                clearable
                outlined
                prepend-icon="mdi-account"
                rounded
                validate-on-blur
                @input="checkExisted"
              />
              <v-text-field
                v-model="password"
                :label="$vuetify.lang.t('$vuetify.sign.password')"
                :rules="[rules.required]"
                clearable
                outlined
                prepend-icon="mdi-key"
                rounded
                type="password"
                validate-on-blur
              />
              <v-slide-x-transition>
                <v-text-field
                  v-if="!isLogin"
                  v-model="confirmPassword"
                  :label="$vuetify.lang.t('$vuetify.sign.confirmPassword')"
                  :rules="[rules.required, rules.same]"
                  clearable
                  outlined
                  prepend-icon="mdi-lock"
                  rounded
                  type="password"
                  validate-on-blur
                />
              </v-slide-x-transition>
              <v-slide-x-transition>
                <v-text-field
                  v-if="!isLogin"
                  v-model="email"
                  :label="$vuetify.lang.t('$vuetify.sign.email')"
                  :rules="[rules.required, ...rules.email]"
                  clearable
                  outlined
                  prepend-icon="mdi-email"
                  rounded
                  validate-on-blur
                />
              </v-slide-x-transition>
              <v-slide-x-transition>
                <v-text-field
                  v-if="!isLogin"
                  v-model="website"
                  :label="$vuetify.lang.t('$vuetify.sign.website')"
                  clearable
                  hide-details
                  outlined
                  prepend-icon="mdi-web"
                  rounded
                  validate-on-blur
                />
              </v-slide-x-transition>
              <v-subheader v-if="isLogin" class="text-center d-flex justify-space-around">
                <v-btn
                  :loading="signInLoading"
                  class="font-weight-bold text-h6"
                  color="primary"
                  text
                  @click="login"
                >
                  {{ $vuetify.lang.t('$vuetify.sign.in') }}
                </v-btn>
                <!--                <v-divider vertical />-->
                <v-btn class="font-weight-bold text-h6" text @click="isLogin = false">
                  {{ $vuetify.lang.t('$vuetify.app.to') }}&nbsp;{{ $vuetify.lang.t('$vuetify.sign.up') }}
                </v-btn>
              </v-subheader>
              <v-subheader v-else :class="isLogin ? '' : 'mt-6'" class="text-center d-flex justify-space-around">
                <v-btn
                  :loading="signUpLoading"
                  class="font-weight-bold text-h6"
                  color="primary"
                  text
                  @click="register"
                >
                  {{ $vuetify.lang.t('$vuetify.sign.up') }}
                </v-btn>
                <!--                <v-divider vertical />-->
                <v-btn class="font-weight-bold text-h6" text @click="isLogin = true">
                  {{ $vuetify.lang.t('$vuetify.app.to') }}&nbsp;{{ $vuetify.lang.t('$vuetify.sign.in') }}
                </v-btn>
              </v-subheader>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import md5 from 'md5'
import actionTypes from '~/store/.action-types'
import * as payloadTypes from '~/store/.payload-types'

export default Vue.extend({
  name: 'SLoginFullDialog',
  props: {
    icon: {
      type: Boolean,
      default () { return true }
    }
  },
  data () {
    return {
      dialog: false,
      isLogin: true,
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      website: '',
      rules: {
        required: (value: string) => !!value || `${this.$vuetify.lang.t('$vuetify.sign.required')}.`,
        same: (value: string) => this.$data.password === value || `${this.$vuetify.lang.t('$vuetify.sign.different')}.`,
        username: [
          (value: string) => (value.length >= 5 && value.length <= 10) || `${this.$vuetify.lang.t('$vuetify.sign.length')}.`,
          () => !this.$store.state.existed || `${this.$vuetify.lang.t('$vuetify.sign.existed')}.`
        ],
        email: [
          (value: string) => /^\w+@\w+\.\w+/.test(value) || `${this.$vuetify.lang.t('$vuetify.sign.invalid')}.`
        ]
      },
      signInLoading: false,
      signUpLoading: false
    }
  },
  watch: {
    isLogin () {
      const form = this.$refs.form as any
      form.resetValidation()
      this.reset()
    }
  },
  methods: {
    login () {
      this.$store.dispatch(actionTypes.LOGIN, {
        username: this.username,
        password: md5(md5(md5(this.password))),
        callback: (status: boolean, msg: string) => {
          status ? this.$toast.success(msg) : this.$toast.error(msg)
          this.password = status ? this.password : ''
        }
      } as payloadTypes.Login)
    },
    register () {
      const form = this.$refs.form as any
      if (form.validate()) {
        this.signUpLoading = true
        this.$store.dispatch(actionTypes.REGISTER, {
          username: this.username,
          password: md5(md5(md5(this.password))),
          email: this.email,
          website: this.website,
          callback: (status: boolean, msg: string) => {
            this.signUpLoading = false
            if (status) {
              form.resetValidation()
              this.reset()
              this.isLogin = true
            }
            status ? this.$toast.success(msg) : this.$toast.error(msg)
          }
        } as payloadTypes.Register)
      }
    },
    onClose () {
      const form = this.$refs.form as any
      form.resetValidation()
      this.reset()
      this.dialog = false
    },
    reset () { this.username = this.password = this.confirmPassword = this.email = this.website = '' },
    checkExisted () { !this.isLogin && this.$store.dispatch(actionTypes.EXISTED, { username: this.username }) }
  }
})
</script>

<style lang="scss" scoped>
.v-text-field {
  width: 90%;
}

.v-subheader {
  width: 100%;
}
</style>
