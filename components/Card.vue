<template>
  <div class="card rounded-[30px] w-[50%] max-h-full h-[180px] px-2 py-3">
    <NuxtLink
      to="/pokemon/1"
      class="poke-card rounded-[20px] bg-[#4ad0b0] h-full w-full p-4 relative overflow-hidden z-[2]"
    >
      <div class="flex justify-between">
        <p class="text-white text-lg">Bulbasaur</p>
        <p class="text-white opacity-[0.7]">#002</p>
      </div>
      <div>
        <p
          class="text-white text-xs p-1 px-2 w-fit rounded-[20px] bg-[#4fd6b8] mb-2"
        >
          grass
        </p>
        <p
          class="text-white text-xs p-1 px-2 w-fit rounded-[20px] bg-[#4fd6b8]"
        >
          poison
        </p>
      </div>
      <img
        src="/pokemon/bulbasaur.png"
        alt=""
        class="absolute right-5 bottom-5 w-[60px] z-10"
      />
      <div class="pokeball-bg"></div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>
