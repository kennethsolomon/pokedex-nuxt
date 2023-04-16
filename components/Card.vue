<template>
  <div class="card rounded-[30px] w-[50%] max-h-full h-[180px] px-2 py-3">
    <NuxtLink
      to="/pokemon/1"
      class="poke-card rounded-[20px] h-full w-full p-4 relative overflow-hidden z-[2]"
      :class="color[pokemon.types[0].type.name]"
    >
      <div class="flex justify-between">
        <p class="text-white text-lg">
          {{ $firstLetterUpperCase(pokemon.name) }}
        </p>
        <p class="text-white opacity-[0.7]">#{{ $zeroPad(pokemon.id, 3) }}</p>
      </div>

      <div v-for="pokemon_type in pokemon.types" :key="pokemon_type.name">
        <p
          class="text-white text-xs p-1 px-2 mt-1 w-fit rounded-[20px] bg-[#0000000d]"
        >
          {{ pokemon_type.type.name }}
        </p>
      </div>
      <img
        :src="
          pokemon.sprites.other.dream_world.front_default ||
          pokemon.sprites.other['official-artwork'].front_default
        "
        alt=""
        class="absolute right-5 bottom-5 w-[65px] z-10"
      />
      <div class="pokeball-bg"></div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: Object,
  },
  name: 'Card',
  data: () => ({
    color: {
      normal: 'bg-[#202124]',
      fighting: 'bg-[#CE416B]',
      flying: 'bg-[#8fa9de]',
      poison: 'bg-[#AA6BC8]',
      ground: 'bg-[#D97845]',
      rock: 'bg-[#C5B78C]',
      bug: 'bg-[#91C12F]',
      ghost: 'bg-[#5269AD]',
      steel: 'bg-[#5A8EA2]',
      fire: 'bg-[#da8182]',
      water: 'bg-[#85cafe]',
      grass: 'bg-[#4ad0b0]',
      electric: 'bg-[#F4D23C]',
      psychic: 'bg-[#90804D]',
      ice: 'bg-[#73CEC0]',
      dragon: 'bg-[#0B6DC3]',
      dark: 'bg-[#202124]',
      fairy: 'bg-[#EC8FE6]',
      '???': 'bg-[#68A090]',
      physical: 'bg-[#EA551E]',
      special: 'bg-[#1F4E94]',
      status: 'bg-[#999999]',
    },
  }),
  mounted() {
    console.log(this.pokemon, 'card')
  },
}
</script>
