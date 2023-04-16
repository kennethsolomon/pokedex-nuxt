<template>
  <div>
    <div class="p-5 pt-10 bg-[#4ad0b0] h-[50vh] z-[1] overflow-hidden">
      <div class="flex justify-between">
        <h2 class="text-white text-[42px] font-bold pt-10">Bulbasaur</h2>
      </div>
      <div class="flex flex-ros justify-between">
        <div class="flex gap-3">
          <p
            class="text-white text-xlg p-1 px-2 w-fit px-5 rounded-[20px] bg-[#4fd6b8]"
          >
            Grass
          </p>
          <p
            class="text-white text-xlg p-1 px-2 w-fit px-5 rounded-[20px] bg-[#4fd6b8]"
          >
            Poison
          </p>
        </div>
        <p class="text-white opacity=[.7] font-bold">#002</p>
      </div>
      <div class="w-full h-full flex relative">
        <img
          src="/pokemon/bulbasaur.png"
          alt=""
          class="w-[40%] absolute bottom-[8.5rem] right-[30%] z-10"
        />
        <div class="pokeball-bg-profile z-[2] relative">
          <div class="circle z-[20]"></div>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-[40px] mt-[-50px] z-[5] p-7 pt-20">
      <ul class="flex flex-row justify-between items-center pb-5">
        <li
          @click="setActiveTab(0)"
          class="text-black font-bold pb-2 cursor-pointer"
          :class="
            activeTab === 0 ? 'c-border-bottom opacity-[.7]' : 'opacity-[0.3]'
          "
        >
          About
        </li>
        <li
          @click="setActiveTab(1)"
          class="text-black font-bold pb-2 cursor-pointer"
          :class="
            activeTab === 1 ? 'c-border-bottom opacity-[.7]' : 'opacity-[0.3]'
          "
        >
          Base Stats
        </li>
        <li
          @click="setActiveTab(2)"
          class="text-black font-bold pb-2 cursor-pointer"
          :class="
            activeTab === 2 ? 'c-border-bottom opacity-[.7]' : 'opacity-[0.3]'
          "
        >
          Evolution
        </li>
        <li
          @click="setActiveTab(3)"
          class="text-black font-bold pb-2 cursor-pointer"
          :class="
            activeTab === 3 ? 'c-border-bottom opacity-[.7]' : 'opacity-[0.3]'
          "
        >
          Moves
        </li>
      </ul>
      <div>
        <div v-if="activeTab === 0">
          <div class="species flex gap-10 mb-3">
            <p class="text-black opacity-[0.5]">Species</p>
            <p class="text-black">Seed</p>
          </div>
          <div class="species flex gap-10 mb-3">
            <p class="text-black opacity-[0.5]">Height</p>
            <p class="text-black">2`3.6"(0.70 cm)</p>
          </div>
          <div class="species flex gap-10 mb-3">
            <p class="text-black opacity-[0.5]">Weight</p>
            <p class="text-black">15.2 lbs(6.9 kg)</p>
          </div>
          <div class="species flex gap-10 mb-3">
            <p class="text-black opacity-[0.5]">Abilities</p>
            <p class="text-black">Overgrow, Chlorophyl</p>
          </div>
          <h2 class="font-bold text-black my-5">Breading</h2>
          <div class="species flex gap-10 mb-3">
            <p class="text-black opacity-[0.5]">Gender</p>
            <p class="text-black">87.5% 12.5%</p>
          </div>
          <div class="species flex gap-10 mb-3">
            <p class="text-black opacity-[0.5]">Egg Groups</p>
            <p class="text-black">Monster</p>
          </div>
          <div class="species flex gap-10 mb-3">
            <p class="text-black opacity-[0.5]">Egg Cycle</p>
            <p class="text-black">Grass</p>
          </div>
        </div>
        <div v-if="activeTab === 1">
          <div class="flex w-full gap-3">
            <div class="w-[20%] pr-5">
              <div class="species flex items-center gap-10 mb-3">
                <p class="text-black opacity-[0.5]">HP</p>
              </div>
              <div class="species flex items-center gap-10 mb-3">
                <p class="text-black opacity-[0.5]">ATTACK</p>
              </div>
              <div class="species flex items-center gap-10 mb-3">
                <p class="text-black opacity-[0.5]">DEFENSE</p>
              </div>
              <div class="species flex items-center gap-10 mb-3">
                <p class="text-black opacity-[0.5]">Sp.Atk</p>
              </div>
              <div class="species flex items-center gap-10 mb-3">
                <p class="text-black opacity-[0.5]">Sp.Def</p>
              </div>
              <div class="species flex items-center gap-10 mb-3">
                <p class="text-black opacity-[0.5]">Speed</p>
              </div>
              <div class="species flex items-center gap-10 mb-3">
                <p class="text-black opacity-[0.5]">Total</p>
              </div>
            </div>

            <div class="w-[75%] flex flex-col gap-3">
              <div class="flex items-center gap-5">
                <p class="text-black pr-5">45</p>
                <div
                  class="w-full bg-gray-200 rounded-full h-[5px] dark:bg-gray-300"
                >
                  <div
                    class="bg-green-500 h-[5px] rounded-full"
                    style="width: 45%"
                  ></div>
                </div>
              </div>
              <div class="flex items-center gap-5">
                <p class="text-black pr-5">65</p>
                <div
                  class="w-full bg-gray-200 rounded-full h-[5px] dark:bg-gray-300"
                >
                  <div
                    class="bg-red-500 h-[5px] rounded-full"
                    style="width: 65%"
                  ></div>
                </div>
              </div>
              <div class="flex items-center gap-5">
                <p class="text-black pr-5">80</p>
                <div
                  class="w-full bg-gray-200 rounded-full h-[5px] dark:bg-gray-300"
                >
                  <div
                    class="bg-orange-300 h-[5px] rounded-full"
                    style="width: 80%"
                  ></div>
                </div>
              </div>
              <div class="flex items-center gap-5">
                <p class="text-black pr-5">65</p>
                <div
                  class="w-full bg-gray-200 rounded-full h-[5px] dark:bg-gray-300"
                >
                  <div
                    class="bg-red-400 h-[5px] rounded-full"
                    style="width: 65%"
                  ></div>
                </div>
              </div>
              <div class="flex items-center gap-5">
                <p class="text-black pr-5">80</p>
                <div
                  class="w-full bg-gray-200 rounded-full h-[5px] dark:bg-gray-300"
                >
                  <div
                    class="bg-orange-200 h-[5px] rounded-full"
                    style="width: 80%"
                  ></div>
                </div>
              </div>
              <div class="flex items-center gap-5">
                <p class="text-black pr-5">30</p>
                <div
                  class="w-full bg-gray-200 rounded-full h-[5px] dark:bg-gray-300"
                >
                  <div
                    class="bg-yellow-500 h-[5px] rounded-full"
                    style="width: 30%"
                  ></div>
                </div>
              </div>
              <div class="flex items-center gap-5">
                <p class="text-black pr-5">317</p>
                <div class="w-full rounded-md overflow-hidden bg-neutral-100">
                  <div class="w-[47%] h-[5px] py-[2px] bg-error"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- {activeTab === 2 && (
            <>
              Evolution
            </>
          )}
          {activeTab === 3 && (
            <>
              Moves
            </> -->
        <!-- )} -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  data: () => ({
    activeTab: 0,
  }),

  methods: {
    setActiveTab(tab) {
      this.activeTab = tab
    },
  },
}
</script>
