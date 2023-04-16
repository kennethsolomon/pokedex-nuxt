import Vuex from 'vuex'
import pokemon from './modules/pokemon'

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      pokemon,
    },
  })
}

export default createStore
