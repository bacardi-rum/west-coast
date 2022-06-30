import { Context } from '@nuxt/types'
import mutationTypes from '~/store/.mutation-types'

export default (ctx: Context) => {
  const {
    $axios,
    $cookies,
    redirect,
    store: { commit }
  } = ctx
  const token = $cookies.get('westcoast-token')
  if (token) {
    $axios.get('/jwt').catch(() => {
      $cookies.remove('westcoast-token')
      ctx.$toast.error('Token\'s expired. Please sign in again.')
      redirect('/')
      commit(mutationTypes.TOKEN_EXPIRED)
    })
  }
}
