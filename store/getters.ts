import { Article } from '~/models'
import { State } from '~/store/state'

export default {
  technology (state: State): Article[] {
    return state.articles.filter(art => art.category === 'technology')
  },
  life (state: State): Article[] {
    return state.articles.filter(art => art.category === 'life')
  },
  travel (state: State): Article[] {
    return state.articles.filter(art => art.category === 'travel')
  },
  work (state: State): Article[] {
    return state.articles.filter(art => art.category === 'work')
  }
}
