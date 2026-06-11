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
      <div class="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/85"></div>
    </figure>

    <div class="absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-3 p-4">
      <router-link
        :to="categoryTo"
        class="max-w-[75%] rounded-xl px-3 py-2 text-xs font-semibold capitalize leading-tight text-primarydark shadow-sm transition hover:bg-light"
        :class="categoryClass"
        :aria-label="`Lihat destinasi kategori ${categoryName}`"
      >
        {{ categoryName }}
      </router-link>
      <router-link
        :to="destinationTo"
        class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-light/80 bg-black/15 text-light backdrop-blur-md transition group-hover:bg-primary"
        :aria-label="`Kunjungi destinasi ${tour.name}`"
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
        {{ tour.regency?.name || 'TMII' }}
      </p>
      <h3 class="text-xl font-semibold leading-snug text-light">
        {{ tour.name }}
      </h3>
      <p class="mt-2 text-sm leading-6 text-lighthover">
        {{ truncate(tour.description, 118) }}
      </p>
      <p class="mt-3 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-light backdrop-blur" aria-label="caption gambar">
        Gambar: {{ imageCaption }}
      </p>
    </div>

    <router-link
      :to="destinationTo"
      class="absolute inset-0 z-[5]"
      :aria-label="`Kunjungi destinasi ${tour.name}`"
    ></router-link>
  </article>
</template>

<script>
export default {
  name: 'DestinationCard',
  props: {
    tour: {
      type: Object,
      required: true
    }
  },
  computed: {
    destinationTo() {
      return `/destinasi/${this.tour.slug}`
    },
    categoryTo() {
      return `/destinasi?kategori=${this.tour.category?.slug || ''}`
    },
    categoryName() {
      return this.tour.category?.name || 'Destinasi'
    },
    imageSrc() {
      return this.tour.image?.image ? `/assets/${this.tour.image.image}` : '/assets/placeholder-img.png'
    },
    imageAlt() {
      return this.tour.image?.alt || `Gambar destinasi ${this.tour.name}`
    },
    imageCaption() {
      return this.tour.image?.caption || `${this.tour.name} di ${this.tour.location || 'TMII'}`
    },
    categoryClass() {
      const classes = {
        'budaya-nusantara': 'bg-rose-100',
        'wahana-rekreasi': 'bg-sky-100',
        'museum-edukasi': 'bg-amber-100',
        'ruang-terbuka': 'bg-green-100',
        'alam-satwa': 'bg-lime-100',
        'ikon-arsitektur': 'bg-violet-100'
      }

      return classes[this.tour.category?.slug] || 'bg-emeraldmedium'
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
