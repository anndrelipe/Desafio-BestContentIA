<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import Footer from '@/components/Footer.vue';

onMounted(() => {
    initFlowbite();

});
</script>

<template>
    




    <!-- Container -->
    <div id="container">
        

        <!-- Main Context -->
        <section class="bg-[#111827] dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <img src="../assets/olimpiada-olympic-games-logo-0.png" class="inline-flex justify-center m-0 w-40 h-40" alt="aneis_olimpicos"/>
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">{{ $t('Home.firstH1') }}<span class="text-blue-700">{{ $t('Home.firstSpan') }}</span></h1>
                <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{{ $t('Home.firstParagraph') }}</p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <RouterLink to="/chat" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        {{ $t('Home.firstRouterLink') }}
                        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </RouterLink>
                    <RouterLink to="/docs" class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                        {{ $t('Home.secondRouterLink') }}
                    </RouterLink>
                </div>
            </div>
        </section>
        <br>
        <br>
        <br>

    </div>

    <Footer/>

</template>

<style scoped>

    #container {
        margin: 0% 5% 20% 5%;
    }

</style>