<template>
  <article class="prose max-w-none dark:prose-invert">
    <ContentDoc path="/" />
  </article>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Main page',
  description: 'This is the main page',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>
