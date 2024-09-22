<template>
  <article
    class="prose max-w-none dark:prose-invert prose-pre:bg-white prose-pre:text-gray-700 dark:prose-pre:bg-gray-800 dark:prose-pre:text-gray-300"
  >
    <ContentDoc>
      <template #not-found>
        <h1>Document not found (404)</h1>
        <p>This blog post could not be found.</p>
      </template>
      <template #default="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div
            :class="{
              'col-span-6 md:col-span-4': doc.toc,
              'col-span-6': !doc.toc
            }"
          >
            <ContentRenderer :value="doc" />
          </div>
          <div v-if="doc.toc" class="not-prose hidden md:col-span-2 md:block">
            <aside class="sticky top-8">
              <div class="mb-2 font-semibold">Table of Contents</div>
              <nav>
                <TocLinks :links="doc.body?.toc?.links" :active-id="activeId" />
              </nav>
            </aside>
          </div>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup lang="ts">
const activeId = ref(null)
const observer = ref<IntersectionObserver>()
const elements = ref()

onMounted(() => {
  const callback = (entries: any) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id
        break
      }
    }
  }

  setTimeout(() => {
    observer.value = new IntersectionObserver(callback, {
      root: null,
      threshold: 0.5
    })

    elements.value = document.querySelectorAll('h2, h3')

    for (const element of elements.value) {
      observer.value.observe(element)
    }
  }, 150)
})

onBeforeUnmount(() => {
  if (observer.value) {
    for (const element of elements.value) {
      observer.value.unobserve(element)
    }
  }
})
</script>
