import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  articles: []
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  articles: state => state.articles
}

export const mutations: MutationTree<RootState> = {
  CHANGE_NAME: (state, newName: []) => (state.articles = newName)
}

export const actions: ActionTree<RootState, RootState> = {
  fetchThings ({ commit }) {
    // const things = await this.$axios.$get('/things')
    commit('CHANGE_NAME', 'New name')
  }
}
