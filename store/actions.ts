import { ActionContext, ActionTree } from 'vuex'
import { AxiosResponse } from 'axios'
import { Context } from '@nuxt/types'
import * as payloadTypes from './.payload-types'
import actionTypes from '~/store/.action-types'
import mutationTypes from '~/store/.mutation-types'
import { State } from '~/store/state'
import serverConfig from '~/config/server.config'
import { Article } from '~/models'

export default {
  async nuxtServerInit ({ commit }: ActionContext<State, State>, {
    $axios
  }: Context) {
    const userInfo = await $axios.get('/user/info')
      .then(({ data }) => data.userInfo)
      .catch(() => ({}))
    if (Object.keys(userInfo).length !== 0) {
      commit(mutationTypes.GET_USER_INFO, {
        ...userInfo,
        avatar: `${serverConfig.SERVER}${userInfo.avatarUrl}`
      })
    }

    const articles = await $axios.get('/article/all')
      .then(({ data }) => data.articles.sort((a: Article, b: Article) => +new Date(b.updated) - +new Date(a.updated)))
    commit(mutationTypes.GET_ALL_ARTICLES, articles)
  },
  async [actionTypes.REGISTER] (_context: ActionContext<State, State>, payload: payloadTypes.Register) {
    const $axios = this.$axios as any // NuxtAxiosInstance
    const {
      callback,
      ...userInfo
    } = payload
    await $axios.post('user/register', userInfo)
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
          commit(mutationTypes.SIGNED_IN, {
            ...data.userInfo,
            avatar: `${serverConfig.SERVER}${data.userInfo.avatarUrl}`
          })
        }
      })
  },
  async [actionTypes.EXISTED] ({ commit }: ActionContext<State, State>, payload: payloadTypes.Existed) {
    const $axios = this.$axios as any // NuxtAxiosInstance
    const { username } = payload
    const existed = await $axios.post('/user/existed', { username }).then(({ data }: AxiosResponse) => data.status)
    commit(mutationTypes.EXISTED, existed)
  },
  async [actionTypes.SIGNATURE] ({ commit }: ActionContext<State, State>, payload: payloadTypes.Signature) {
    const {
      _id,
      signature,
      callback
    } = payload
    const $axios = this.$axios as any
    await $axios.post('/user/signature', {
      _id,
      signature
    })
      .then(({ data }: AxiosResponse) => {
        callback(data.status, data.msg)
        if (data.status) {
          commit(mutationTypes.SIGNATURE, signature)
        }
      })
  },
  async [actionTypes.UPLOAD_AVATAR] ({ commit }: ActionContext<State, State>, payload: payloadTypes.UploadAvatar) {
    const {
      avatar,
      callback
    } = payload
    const $axios = this.$axios as any
    await $axios.post('/user/upload-avatar', avatar)
      .then(({ data }: AxiosResponse) => {
        callback(data.status, data.msg)
        if (data.status) {
          commit(mutationTypes.UPLOAD_AVATAR, data.avatar)
        }
      })
  },
  async [actionTypes.SAVE] ({ commit }: ActionContext<State, State>, payload: payloadTypes.Save) {
    const {
      value,
      callback
    } = payload
    const $axios = this.$axios as any
    await $axios.post('/article/save', value)
      .then(({ data }: AxiosResponse) => {
        callback(data.status, data.msg)
        if (data.status) {
          commit(mutationTypes.SAVED, data.art)
        }
      })
  },
  async [actionTypes.CREATE] ({ commit }: ActionContext<State, State>) {
    const $axios = this.$axios as any
    await $axios.get('/article/create')
      .then(({ data }: AxiosResponse) => {
        commit(mutationTypes.CREATED, data._id)
      })
  },
  async [actionTypes.DELETE_TEMP_ID] (_ctx: ActionContext<State, State>, _id: string) {

  }
} as ActionTree<State, State>
