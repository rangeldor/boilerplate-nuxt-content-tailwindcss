<template>
  <div class="flex items-center gap-2">
    <div v-if="showNextModeLabel" class="text-xs text-gray-500">
      Change to {{ nextMode }}
    </div>
    <button
      type="button"
      class="px-2 py-1 text-4xl text-gray-500 hover:bg-gray-200 md:text-base dark:hover:bg-gray-800"
      @click="toggleMode"
      @mouseenter="showNextModeLabel = true"
      @mouseleave="showNextModeLabel = false"
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
  const nextModeIndex =
    currentModeIndex + 1 === modes.length ? 0 : currentModeIndex + 1

  return modes[nextModeIndex]
})

const nextModeIcon = computed(() => nextModeIcons[nextMode.value])

const toggleMode = () => {
  colorMode.preference = nextMode.value
}
</script>
