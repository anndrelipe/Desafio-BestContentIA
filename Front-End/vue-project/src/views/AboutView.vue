<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import Footer from '@/components/Footer.vue';

onMounted(() => {
    initFlowbite();

});
</script>

<template>

    <div id="container">
        <h3 class="text-3xl mb-2 text-gray-50">{{ $t('About.firstH3') }}<span class="text-blue-700">{{ $t('About.firstSpan') }}</span></h3>
        <hr class="border-gray-500">
        <p class="mb-5 mt-3 text-gray-500 dark:text-gray-400">{{ $t('About.firstParagraph') }}</p>
        <h3 class="text-3xl mb-2 text-gray-50">{{ $t('About.firstH3') }}<span class="text-blue-700">{{ $t('About.secondSpan') }}</span></h3>
        <hr class="border-gray-500">
        <p class="mb-5 mt-3 text-gray-500 dark:text-gray-400">{{ $t('About.secondParagraph') }}</p>
        <h3 class="text-3xl mb-2 text-gray-50">{{ $t('About.secondH3') }}<span class="text-blue-700">{{ $t('About.thirdSpan') }}</span></h3>
        <hr class="border-gray-500">
        <p class="mb-2 mt-3 text-gray-500 dark:text-gray-400">{{ $t('About.thirdParagraph') }}</p>
        <p class="mb-2 mt-3 text-gray-500 dark:text-gray-400">{{ $t('About.fourthParagraph') }}</p>
        <p class="mb-2 mt-2 text-gray-500 dark:text-gray-400">{{ $t('About.fifthParagraph') }}</p>
        <p class="mb-5 mt-2 text-gray-500 dark:text-gray-400">{{ $t('About.sixthParagraph') }}</p>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <Footer/>

</template>

<style scoped>
    #container {
        margin: 3% 5% 10% 5% ;
    }
</style>