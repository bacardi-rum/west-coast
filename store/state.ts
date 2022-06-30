// import { GetterTree, ActionTree, MutationTree, ActionContext } from 'vuex'
// import { Context } from '@nuxt/types'
// import getters from '~/store/getters'
// import mutations from '~/store/mutations'
// import actions from '~/store/actions'
import { Article, User } from '~/models'

export type State = {
  user: User | {},
  login: boolean,
  existed: boolean,
  technology: Article[],
  life: Article[],
  travel: Article[],
  work: Article[]
}

const state: () => State = () => ({
  user: {},
  login: false,
  existed: false,
  technology: [],
  life: [],
  travel: [],
  work: []
})

export default state

// export type RootState = ReturnType<typeof state>

// export const getters: GetterTree<RootState, RootState> = {
//   // articles: state => state.articles
// }
//
// export const mutations: MutationTree<RootState> = {
//   // CHANGE_NAME: (state, newName: []) => (state.articles = newName)
// }
//
// export const actions: ActionTree<RootState, RootState> = {
//   nuxtServerInit (context: ActionContext<RootState, RootState>, ctx: Context) {
//     const { commit } = context
//     const { app } = ctx
//     // return app.$axios.get('/user').then(({ data }) => commit('user/setInfo', data))
//   }
// }
