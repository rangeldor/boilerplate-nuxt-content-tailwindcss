<template>
  <div class="flex gap-2 items-center">
    <div class="text-gray-500 text-xs" v-if="showNextModeLabel">Change to {{ nextMode }}</div>
    <button 
      type="button"
      @click="toggleMode" 
      @mouseenter="showNextModeLabel = true"
      @mouseleave="showNextModeLabel = false"
      class="hover:bg-gray-200 dark:hover:bg-gray-800 px-2 py-1 text-gray-500 text-4xl md:text-base"
    >
      {{ nextModeIcon }}
    </button>
  </div>
</template>

<script lang="ts" setup>
const showNextModeLabel = ref(false)
const colorMode = useColorMode()

const modes = [
  'system', // 0
  'light', // 1
  'dark' // 2
] as Theme[] // .length = 3   

const nextModeIcons = {
  system: '🌓',
  light: '🌕',
  dark: '🌑'
}

const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference as Theme)
  const nextModeIndex = currentModeIndex + 1 === modes.length ? 0 : currentModeIndex + 1 

  return modes[nextModeIndex]
})

const nextModeIcon = computed(() => nextModeIcons[nextMode.value])

const toggleMode = () => {
  colorMode.preference = nextMode.value
}
</script>