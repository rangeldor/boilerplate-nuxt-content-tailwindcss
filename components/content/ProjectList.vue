<template>
  <div class="not-prose">
    <section v-if="status === 'pending'">Loading...</section>
    <section v-else-if="error">Something went wrong... Try again!</section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li
          v-for="repository in repositories"
          :key="repository.id"
          class="rounded-sm border border-gray-200 p-4 font-mono hover:bg-gray-200 dark:border-gray-800 dark:hover:hover:bg-gray-800"
        >
          <a :href="repository.html_url" target="_blank">
            <div class="flex items-center justify-between">
              <div class="font-semibold">{{ repository.name }}</div>
              <div>{{ repository.language }}</div>
            </div>
            <p class="text-sm">
              {{ repository.description }}
            </p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
const {
  error,
  status,
  data: repositories
} = await useLazyFetch<IProject[]>(
  'https://api.github.com/users/rangeldor/repos?sort=updated'
)
</script>
