export default {
  async getPokemons({ commit }) {
    const pokemons = await this.$axios.$get(`/pokemons`)
    commit('SET_POKEMONS', pokemons)
    return pokemons
  },

  async getPokemonDetails({ commit }, id) {
    const pokemon = await this.$axios.$get(`pokemon-details/${id}`)
    commit('SET_SELECTED_POKEMON_DETAILS', pokemon)
    return pokemon
  },

  async searchPokemons({}, form) {
    const pokemons = await this.$axios.$post(`search-pokemon`, form)
    return pokemons
  },
}
