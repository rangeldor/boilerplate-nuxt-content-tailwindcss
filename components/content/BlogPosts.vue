<template>
  <slot :posts="posts">
    <section class="not-prose font-mono">
      <div class="column text-gray-700 dark:text-gray-500 text-sm">
        <div>date</div>
        <div>title</div>
      </div>

      <ul>
        <li v-for="post in posts" :key="post._path">
          <NuxtLink :to="post._path" class="column group hover:bg-gray-100 dark:hover:bg-gray-800">
            <div
              :class="{ 'invisible': !post.displayYear, 'text-gray-700 dark:text-gray-500': post.displayYear }">
              {{ post.year }}</div>
            <div>{{ post.title }}</div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </slot>
</template>

<script setup lang="ts">
import type { IBlogPostsProps } from '~/types/blog-posts'

const blogPostsProps = defineProps<IBlogPostsProps>()
const { limit = null } = toRefs(blogPostsProps)

const { data } = await useAsyncData(
  'blog-list',
    () => {
    const query = queryContent('/blog')
      .where({ _path: { $ne: '/blog' } })
      .only(['_path', 'title', 'publishedAt', 'displayYear', 'year', 'id'])
      .sort({ publishedAt: -1 })

    if (limit?.value) {
      query.limit(limit.value)
    }

    return query.find()
  }
)

const posts = computed(() => {
  if (!data.value) {
    return []
  }
  const result = []
  let lastYear = null
  for (const post of data.value) {
    const year = new Date(post.publishedAt).getFullYear()
    const displayYear = year !== lastYear
    post.displayYear = displayYear
    post.year = year
    result.push(post)
    lastYear = year
  }
  return result
})
</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700
}
</style>