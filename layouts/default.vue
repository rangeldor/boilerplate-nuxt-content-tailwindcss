<template>
  <div class="container mx-auto max-w-4xl">
    <header class="mt-5 flex items-start justify-between md:items-center">
      <div class="flex items-center md:gap-8">
        <div class="hidden md:block">
          <NuxtLink
            to="/"
            class="p-2 text-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            Piotr Jura
          </NuxtLink>
        </div>

        <MenuList />
      </div>

      <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>
    </header>

    <main class="mt-10 p-2">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s - Piotr Jura',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ]
})
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  @apply bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300;
}
</style>
