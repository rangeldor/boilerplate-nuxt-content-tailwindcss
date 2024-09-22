<template>
  <BlogPosts v-slot="{ posts }" :limit="limit">
    <div v-for="post in posts" :key="post.id">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </div>
  </BlogPosts>
</template>

<script setup lang="ts">
import type { IBlogPostsProps } from '~/types/blog-posts'

const lastBlogPostsProps = defineProps<IBlogPostsProps>()
const { limit = null } = toRefs(lastBlogPostsProps)
</script>
