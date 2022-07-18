import types from '~/store/.mutation-types'
import { State } from '~/store/state'
import { Article, User } from '~/models'
import serverConfig from '~/config/server.config'

export default {
  [types.GET_ALL_ARTICLES] (state: State, articles: Article[]) {
    state.articles = articles
  },
  [types.SIGNED_IN] (state: State, userInfo: User) {
    // console.log(state, userInfo)
    state.user = userInfo
    state.login = true
  },
  [types.EXISTED] (state: State, existed: boolean) {
    state.existed = existed
  },
  [types.GET_USER_INFO] (state: State, userInfo: Partial<User>) {
    state.user = userInfo
    state.login = Object.keys(userInfo).length !== 0
  },
  [types.TOKEN_EXPIRED] (state: State) {
    state.user = {}
    state.login = false
  },
  [types.LOG_OUT] (state: State) {
    state.user = {}
    state.login = false
    const $cookies = this.$cookies as any
    $cookies.remove('westcoast-token')
  },
  [types.SIGNATURE] (state: State, signature: string) {
    state.user = {
      ...state.user,
      signature
    }
  },
  [types.UPLOAD_AVATAR] (state: State, avatarUrl: string) {
    state.user = {
      ...state.user,
      avatar: `${serverConfig.SERVER}${avatarUrl}`
    }
  },
  [types.SAVED] (state: State, art: Article) {
    state.articles.unshift(art)
  },
  [types.CREATED] (state: State, _id: string) {
    state.tempId = _id
  }
}
