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
        <h3 class="text-3xl mb-2 text-gray-50">{{ $t('Docs.firstH3') }}</h3>
        <hr class="border-gray-500">
        <p class="mb-5 mt-3 text-gray-500 dark:text-gray-400">{{ $t('Docs.firstParagraph') }}</p>
        <h3 class="text-3xl mb-2 text-gray-50">{{ $t('Docs.secondH3') }}</h3>
        <hr class="border-gray-500">
        <p class="mb-2 mt-3 text-gray-500 dark:text-gray-400">{{ $t('Docs.secondParagraph') }}</p>
        <p class="mb-2 mt-2 text-gray-500 dark:text-gray-400">{{ $t('Docs.thirdParagraph') }}</p>
        <p class="mb-5 mt-2 text-gray-500 dark:text-gray-400">{{ $t('Docs.fourthParagraph') }}</p>
    </div>
    <br>
    <br>
    <br>
    <Footer/>
</template>

<style scoped>
    #container {
        margin: 3% 5% 30% 5% ;
    }
</style>