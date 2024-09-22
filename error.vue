<template>
  <NuxtLayout>
    <section>
      <h1 class="mb-4 text-4xl">Opps {{ error?.statusCode }}</h1>

      <h2 class="text-xl text-gray-500 dark:text-gray-400">
        {{ error?.statusMessage }}
      </h2>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useError } from '#app' // Import useError
import type { NuxtError } from '#app' // Import the NuxtError type

// Get the current error from the composable
const rawError = useError() // rawError is Ref<NuxtError | null | undefined>

// Create a computed property to handle null or undefined errors
const error = computed(
  () =>
    rawError.value ||
    ({ statusCode: 500, message: 'An unexpected error occurred' } as NuxtError)
)
</script>
