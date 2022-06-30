import types from '~/store/.mutation-types'
import { State } from '~/store/state'
import { User } from '~/models'

export default {
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
  }
}
