<template>
    <div class="min-h-screen max-w-screen-xl px-4 mx-auto font-inter">
        <div class="mb-8 mx-2 sm:mx-4">
            <Breadcrumb />
        </div>
        <div v-if="post" class="content">
            <header class="max-w-2xl mx-auto my-4 text-center">
                <h2 class="inline-block p-2 mb-4 text-xs font-bold tracking-wider text-center uppercase rounded-full bg-primary font-poppins text-light"
                    aria-label="beranda">JELAJAH TMII</h2>
                <h3 class="mx-auto mb-4 text-xl font-bold leading-none tracking-tight capitalize font-poppins text-primarydark dark:text-graylight sm:text-3xl"
                    aria-label="judul blog" title="judul blog"> {{ post.title }}</h3>
                <p class="my-4 text-base font-normal capitalize font-inter text-graydark dark:text-primarygray md:text-lg"
                    aria-label="quotes">"Panduan singkat untuk menikmati budaya, wahana, dan ruang hijau TMII dengan
                    lebih terencana."</p>
                <div
                    class="flex items-center justify-center max-w-xl gap-4 my-4 text-sm font-inter text-graydark dark:text-primarygray sm:mx-auto">
                    <div class="flex items-center gap-1">
                        <svg class="w-6 h-6 text-grayhover dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                                clip-rule="evenodd" />
                        </svg>

                        <a :href="`/post/author/${post.author.username}`"
                            class="text-dark hover:underline dark:text-graylight">by {{ post.author.full_name }}</a>
                    </div>
                    <div class="flex items-center gap-1">
                        <svg class="w-6 h-6 text-grayhover dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span>{{ formatDate(post.published_at) }}</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <svg class="w-6 h-6 text-grayhover dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span>{{ post.views }}</span>

                    </div>
                </div>
            </header>
            <section class="grid grid-cols-1 gap-8 px-3 mx-auto lg:grid-cols-[minmax(0,1fr)_22rem]">
                <!-- {{-- section left --}} -->
                <section v-if="post.thumbnail" class="relative min-w-0 container-detail">
                    <figure class="relative mb-6 overflow-hidden rounded-3xl bg-gray-100 shadow-lg dark:bg-dark">
                        <img id="elImg" class="h-64 w-full object-cover sm:h-80 lg:h-[26rem]"
                            :alt="post.thumbnail.alt || post.title" :src="`/assets/${post.thumbnail.image}`" loading="lazy"/>
                        <figcaption class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-12 text-left text-sm font-medium text-light">
                            Gambar: {{ post.thumbnail.caption || post.title }}
                        </figcaption>
                        <button @click="fullScreen()" type="button"
                            class="absolute right-4 top-4 p-2 text-sm font-medium text-center text-white duration-300 ease-in-out border rounded-full backdrop-blur-lg hover:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300"
                            aria-label="perbesar gambar">
                            <svg class="w-5 h-5 text-white md:h-7 md:w-7" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="stroke-2"
                                    d="M16 4h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5" />
                            </svg>
                        </button>
                    </figure>
                    <div class="w-full px-2 mt-6 text-center md:mx-auto md:mb-2">
                        <!-- hal.deskripsi -->
                        <div class="relative px-2 mb-4 rounded-lg description md:mx-auto md:max-w-full lg:max-w-screen-xl"
                            id="deskripsi">
                            <article
                                class="mt-4 max-w-none text-sm prose text-left prose-li:text-primarydark md:prose-strong:text-base prose-strong:text-primarydark prose-strong:text-sm prose-strong:dark:text-graylight prose-li:dark:text-graylight prose-h3:dark:text-graylight prose-h2:dark:text-graylight prose-h2:text-primarydark dark:text-graylight font-inter text-primarydark md:text-base"
                                v-html="post.content">
                            </article>
                        </div>
                        <!-- akhir deskripsi -->
                    </div>
                </section>
                <!-- {{-- section right --}} -->
                <aside
                    class="min-w-0 p-1 mt-1 rounded-lg section-right font-roboto">
                    <div class="author-blog">
                        <h4
                            class="px-1.5 pb-4 text-left font-inter text-xl font-semibold text-dark dark:text-graylight">
                            Blog lain dari Penulis
                        </h4>
                        <!-- container List/Carousel -->
                        <div id="blogList"
                            class="relative w-full p-4 bg-gray-100 rounded-2xl shadow-xl shadow-graylight dark:bg-graydark dark:shadow-dark">
                            <ol class="space-y-4 author-carousel *:!overflow-visible">

                                <li v-if="authorPosts.length === 0"
                                    class="flex flex-col items-center w-64 md:w-full gap-2 px-2 py-1 transition-all duration-300 ease-in-out cursor-pointer rounded-xl hover:scale-105 hover:bg-opacity-80 md:flex-row">
                                    <div class="basis-1/3 animate-pulse">
                                        <img src="https://placehold.co/400x300?text=Tidak\nditemukan&font=roboto"
                                            alt="not found" class="rounded-md" loading="lazy">
                                    </div>
                                    <div class="basis-3/4">
                                        <h3 class="text-sm font-light text-dark dark:text-graylight"
                                            aria-label="judul blog">
                                            Tidak ditemukan Postingan lain dari Penulis
                                        </h3>
                                    </div>
                                </li>
                                <li v-for="other in authorPosts" :key="other.id" class="carousel-cell rounded-2xl bg-white p-3 shadow-sm dark:bg-dark">
                                    <a :href="`/post/${other.slug}`" class="mb-3 block overflow-hidden rounded-xl" :aria-label="`Baca blog ${other.title}`">
                                        <img
                                            :src="other.thumbnail?.image ? `/assets/${other.thumbnail.image}` : '/assets/placeholder-img.png'"
                                            :alt="other.thumbnail?.alt || other.title"
                                            class="h-32 w-full object-cover transition duration-500 hover:scale-105"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div class="flex justify-between mb-4 card-header">
                                        <span
                                            class="bg-emeraldmedium text-primarydark text-xs font-normal inline-flex items-center px-2.5 py-0.5 rounded">
                                            <svg class="w-3 h-3 mr-1" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm14 18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4ZM5 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5Zm14 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4Z" />
                                            </svg>
                                            {{ other.category.name }}
                                        </span>
                                        <span
                                            class="inline-flex items-center rounded px-2 py-0.5 text-xs font-normal text-primarydark dark:text-graylight">
                                            <svg class="w-3 h-3 me-1" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            {{ formatDate(other.published_at) }}
                                        </span>
                                    </div>
                                    <div class="card-body my-2">
                                        <h3 class="text-base font-semibold leading-snug text-primarydark dark:text-light">
                                            {{ other.title }}</h3>
                                        <p class="font-light text-sm text-primarydark dark:text-light">
                                            {{ truncateContent(other.content) }}
                                        </p>
                                    </div>
                                    <div class="my-2 card-footer">
                                        <div class="flex items-center flex-wrap justify-between">
                                            <div class="flex items-center space-x-2">
                                                <img class="rounded-full w-7 h-7"
                                                    :src="`https://ui-avatars.com/api/?name=${other.author.username}`"
                                                    alt="avatar-user" loading="lazy"/>
                                                <span class="text-sm font-medium text-primarydark dark:text-white">
                                                    {{ other.author.full_name }}
                                                </span>
                                            </div>
                                            <a :href="`/post/${other.slug}`"
                                                class="inline-flex items-center text-sm font-medium dark:text-emeraldmedium text-primaryhover hover:underline">
                                                Baca selengkapnya
                                                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                            <hr class="mt-3 border-graylight sm:mx-auto dark:border-gray-700" />

                            <div v-if="authorPosts.length > 3"
                                class="mx-auto hover:underline underline-offset-4 text-center cta">
                                <a href="/" class="text-base text-blue-400 font-medium">Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                </aside>
            </section>
        </div>
        <GoToTop 
      :threshold="300"
      variant="primary"
      :show-progress="true"
      position="bottom-right"
    />
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { posts as postsData } from '../data/posts.js'
import { categoriesPost } from '../data/categoriesPost.js'
import Breadcrumb from '../components/Breadcrumb.vue'
import GoToTop from '../components/GoToTop.vue'

export default {
    setup() {
        const route = useRoute()
        const post = ref(null)
        const authorPosts = ref([])

        const getPostDetail = () => {
            // get parameter slug 
            const slug = route.params.slug

            // cari data by slug
            const data = postsData.find((p) => p.slug === slug)

            if (!data) {
                console.warn('Data post tidak ditemukan')
                return
            }

            //  filter by category
            const category = categoriesPost.find((c) => c.slug === data.category.slug)

            post.value = {
                ...data,
                category: category || { name: 'Tidak Diketahui' },
            }

            getAuthorPosts()

        }

        const getAuthorPosts = () => {
            if (!post.value) return

            // Filter posts berdasarkan author yang sama, exclude post yang sedang dibaca
            const otherPosts = postsData
                .filter(p =>
                    p.author.username === post.value.author.username &&
                    p.slug !== post.value.slug
                )
                .map(p => {
                    // Tambahkan kategori untuk setiap post
                    const category = categoriesPost.find(c => c.slug === p.category.slug)
                    return {
                        ...p,
                        category: category || { name: 'Tidak Diketahui' }
                    }
                })
                .sort((a, b) => new Date(b.published_at) - new Date(a.published_at)) // Urutkan berdasarkan tanggal
                .slice(0, 5) // Ambil maksimal 5 post

            authorPosts.value = otherPosts
        }

        const truncateContent = (content) => {
            if (!content) return ''
            // Hapus HTML tags dan batasi karakter
            const textContent = content.replace(/<[^>]*>/g, '')
            return textContent.length > 100 ? textContent.substring(0, 100) + '...' : textContent
        }

        // full screen 
        const fullScreen = () => {
            const img = document.getElementById('elImg')
            if (img.requestFullscreen) {
                img.requestFullscreen()
            } else if (img.mozRequestFullScreen) {
                img.mozRequestFullScreen()
            } else if (img.webkitRequestFullscreen) {
                img.webkitRequestFullscreen()
            } else if (img.msRequestFullscreen) {
                img.msRequestFullscreen()
            }
        }

        onMounted(() => {
            getPostDetail()
        })

        return {
            post,
            authorPosts,
            truncateContent,
            fullScreen
        }
    },
    methods: {
        // format tanggal
        formatDate(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('id-ID', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            }).format(date);
        },
    },
    components: {
        Breadcrumb,
        GoToTop
    }
}
</script>
