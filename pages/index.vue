<template>
  <div>
    <div class="pt-10">
      <div class="flex items-center p-5">
        <h2 class="text-3xl font-bold">Pokedex</h2>
      </div>
      <div class="flex flex-wrap items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    <!-- <div v-for="pokemon in pokemons" :key="pokemon.id"> -->
    <!-- {{ pokemon.name }} -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data: () => ({
    pokemons: [],
  }),

  methods: {
    async getPokemons() {
      await this.$store
        .dispatch('getPokemons')
        .then((result) => {
          result.data.slice(0, 10).forEach(async (element) => {
            await this.$axios.get(element.url).then((result) => {
              this.pokemons.push(result.data)
            })
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },

  mounted() {
    this.getPokemons()

    console.log(this.pokemons)
  },
}
</script>
