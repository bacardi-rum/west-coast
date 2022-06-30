import { ActionContext, ActionTree } from 'vuex'
import { AxiosResponse } from 'axios'
import { Context } from '@nuxt/types'
import * as payloadTypes from './.payload-types'
import actionTypes from '~/store/.action-types'
import mutationTypes from '~/store/.mutation-types'
import { State } from '~/store/state'

export default {
  async nuxtServerInit ({ commit }: ActionContext<State, State>, {
    $axios
  }: Context) {
    const userInfo = await $axios.get('/user/info')
      .then(({ data }) => data.userInfo)
      .catch(() => ({}))
    commit(mutationTypes.GET_USER_INFO, userInfo)
  },
  [actionTypes.REGISTER] (_context: ActionContext<State, State>, payload: payloadTypes.Register) {
    const $axios = this.$axios as any // NuxtAxiosInstance
    const {
      callback,
      ...userInfo
    } = payload
    $axios.post('user/register', userInfo)
      .then(({ data }: AxiosResponse) => callback(data.status, data.msg))
  },
  async [actionTypes.LOGIN] ({ commit }: ActionContext<State, State>, payload: payloadTypes.Login) {
    const $axios = this.$axios as any // NuxtAxiosInstance
    const $cookies = this.$cookies as any // NuxtCookies
    const {
      callback,
      ...userInfo
    } = payload
    await $axios.post('/user/login', userInfo)
      .then(({ data }: AxiosResponse) => {
        callback(data.status, data.msg)
        if (data.status) {
          $cookies.set('westcoast-token', data.token)
          commit(mutationTypes.SIGNED_IN, data.userInfo)
        }
      })
  },
  async [actionTypes.EXISTED] ({ commit }: ActionContext<State, State>, payload: payloadTypes.Existed) {
    const $axios = this.$axios as any // NuxtAxiosInstance
    const { username } = payload
    const existed = await $axios.post('/user/existed', { username }).then(({ data }: AxiosResponse) => data.status)
    commit(mutationTypes.EXISTED, existed)
  }
} as ActionTree<State, State>
