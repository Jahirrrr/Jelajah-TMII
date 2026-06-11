<template>
  <article
    class="group relative min-h-[22rem] overflow-hidden rounded-3xl bg-dark shadow-lg ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:min-h-[24rem]"
  >
    <figure class="absolute inset-0">
      <img
        :src="imageSrc"
        :alt="imageAlt"
        class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/85"></div>
    </figure>

    <div class="absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-3 p-4">
      <router-link
        :to="categoryTo"
        class="max-w-[75%] rounded-xl bg-emeraldmedium px-3 py-2 text-xs font-semibold capitalize leading-tight text-primarydark shadow-sm transition hover:bg-light"
        :aria-label="`Lihat kategori ${categoryName}`"
      >
        {{ categoryName }}
      </router-link>
      <router-link
        :to="postTo"
        class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-light/80 bg-black/15 text-light backdrop-blur-md transition group-hover:bg-primary"
        :aria-label="`Baca blog ${post.title}`"
      >
        <svg class="h-4 w-4 rotate-45 transition group-hover:rotate-90" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 8.46159 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            class="fill-light"
          />
        </svg>
      </router-link>
    </div>

    <div class="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-4 text-left sm:p-5">
      <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-graylight">
        <time :datetime="post.published_at">{{ formattedDate }}</time>
      </p>
      <h3 class="text-lg font-semibold leading-snug text-light">
        {{ truncate(post.title, 78) }}
      </h3>
      <p class="mt-2 text-sm leading-6 text-lighthover">
        {{ truncate(strippedContent, 126) }}
      </p>
      <p class="mt-3 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-light backdrop-blur" aria-label="caption gambar">
        Gambar: {{ imageCaption }}
      </p>
    </div>

    <router-link :to="postTo" class="absolute inset-0 z-[5]" :aria-label="`Baca blog ${post.title}`"></router-link>
  </article>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    postTo() {
      return `/post/${this.post.slug}`
    },
    categoryTo() {
      return `/post?kategori=${this.post.category?.slug || ''}`
    },
    categoryName() {
      return this.post.category?.name || 'Blog'
    },
    imageSrc() {
      return this.post.thumbnail?.image ? `/assets/${this.post.thumbnail.image}` : '/assets/placeholder-img.png'
    },
    imageAlt() {
      return this.post.thumbnail?.alt || `Gambar artikel ${this.post.title}`
    },
    imageCaption() {
      return this.post.thumbnail?.caption || this.post.title
    },
    strippedContent() {
      return (this.post.content || '').replace(/<[^>]*>/g, '')
    },
    formattedDate() {
      if (!this.post.published_at) return ''
      return new Intl.DateTimeFormat('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }).format(new Date(this.post.published_at))
    }
  },
  methods: {
    truncate(text, limit) {
      if (!text) return ''
      return text.length > limit ? `${text.substring(0, limit).trim()}...` : text
    }
  }
}
</script>
