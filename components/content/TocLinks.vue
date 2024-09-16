<template>
    <ul>
      <li v-for="link in links" :key="link.id">
        <NuxtLink :to="{ path: route.path, hash: `#${link.id}` }"
        :class="{ 'ml-4': level, 'text-green-600 dark:text-green-400': activeId === link.id }">
          {{ link.text }}
        </NuxtLink>
        <TocLinks :links="link.children" :level="level === undefined ? 0 : level + 1" :active-id="activeId" />
      </li>
    </ul>
</template>
  
<script setup lang="ts">
import type { TocLink } from "@nuxt/content"

interface ITocLink {
  links: TocLink[] | undefined
  level?: number | undefined 
  activeId?: string | null
}

const route = useRoute()

const props = defineProps<ITocLink>()
const { links, level = 0, activeId = null } = toRefs(props)

</script>