<template>
  <section
    id="latest-post"
    class="relative px-4 py-16 mx-auto mt-16 overflow-hidden md:px-10 lg:max-w-screen-xl lg:px-10 lg:py-20 xl:mx-auto xl:px-20"
  >
    <!-- Background decorative images -->
    <img
      src="/assets/sea2dark.svg"
      class="absolute right-0 invisible block w-12 h-12 top-20 -z-10 dark:hidden md:visible"
      alt="sea" loading="lazy"
    />
    <img
      src="/assets/sea2.svg"
      class="absolute right-0 invisible hidden w-12 h-12 top-20 -z-10 dark:block md:visible"
      alt="sea"
    />
    <img
      src="/assets/mountain2dark.svg"
      class="absolute invisible block w-16 h-16 left-14 top-40 -z-10 rotate-12 dark:hidden md:visible"
      alt="mountain"
    />
    <img
      src="/assets/mountain2.svg"
      class="absolute invisible hidden w-16 h-16 left-14 top-40 -z-10 rotate-12 dark:block md:visible"
      alt="mountain"
    />
    <img
      src="/assets/sun.svg"
      class="absolute block w-16 h-16 left-1/2 top-4 -z-10 -rotate-12 dark:hidden"
      alt="sun"
    />
    <img
      src="/assets/sundark.svg"
      class="absolute hidden w-16 h-16 left-1/2 top-4 -z-10 -rotate-12 dark:block"
      alt="sun"
    />

    <!-- Header blog -->
    <div class="max-w-xl mx-auto mb-10 sm:text-center md:mb-12 lg:max-w-2xl">
      <div class="max-w-xl mx-auto mb-5 text-center lg:max-w-2xl">
        <h2
          class="inline-block p-2 mb-2 text-xs font-bold tracking-wider text-center uppercase rounded-full shadow-xl bg-primary font-poppins text-light md:mb-4"
          role="heading"
          aria-level="2"
        >
          JELAJAH TMII
        </h2>
        <div class="mb-4">
          <h1
            class="inline-block max-w-2xl text-xl font-bold leading-tight font-poppins text-primarydark dark:text-graylight md:text-3xl"
            role="heading"
            aria-level="1"
          >
            Cerita Terbaru Seputar Wisata, Budaya, dan Wahana TMII
          </h1>
        </div>
        <p
          class="text-base font-normal font-inter text-graydark dark:text-graylight"
          role="heading"
          aria-level="2"
        >
          Dapatkan inspirasi rute, tips foto, dan panduan keluarga agar kunjungan ke
          Taman Mini Indonesia Indah lebih terencana.
        </p>
      </div>
    </div>

    <!-- Grid blog -->
    <div
      class="relative grid gap-6 px-4 mx-auto sm:grid-cols-2 md:max-w-full lg:max-w-screen-xl lg:grid-cols-3 lg:gap-10"
    >
      <PostCard v-for="post in latestPosts" :key="post.id" :post="post" />
    </div>

    <!-- More button -->
    <div class="w-full mx-auto my-4 text-center more">
      <a
        href="/post"
        class="relative z-10 inline-flex items-center justify-center gap-2 px-2 py-1 mt-2 overflow-hidden text-base border-2 rounded-full group isolation-auto border-light bg-primary font-inter text-light backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-primarydark before:transition-all before:duration-700 hover:text-light before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 md:px-4 md:py-2 md:text-lg lg:font-semibold"
        aria-label="selengkapnya"
      >
        Selengkapnya
        <svg
          class="justify-end w-8 h-8 p-2 duration-300 ease-linear rotate-45 border rounded-full border-light text-light group-hover:rotate-90 group-hover:bg-light"
          viewBox="0 0 16 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            class="fill-light group-hover:fill-dark"
          />
        </svg>
      </a>
    </div>
  </section>
</template>

<script>
import { posts } from '../data/posts';
import PostCard from './PostCard.vue';

export default {
  components: {
    PostCard
  },
    data() {
      return {
        posts,
      }
    },
  computed: {
    latestPosts() {
      return this.posts;
    }
  },
  methods: {
    truncateContent(text, limit) {
      if (text.length <= limit) return text;
      return text.substring(0, limit) + '...';
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toISOString().split('T')[0];
    },
  }
};
</script>
