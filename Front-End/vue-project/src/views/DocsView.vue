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
        <h3 class="text-3xl mb-2 text-gray-50">Introdução</h3>
        <hr class="border-gray-500">
        <p class="mb-5 mt-3 text-gray-500 dark:text-gray-400">Os Jogos Olímpicos são um símbolo global de excelência, diversidade e espírito esportivo. Neste site, nossa missão é tornar o vasto mundo dos esportes olímpicos acessível a todos. Utilizando tecnologia de ponta em inteligência artificial, oferecemos respostas rápidas e precisas para suas perguntas sobre qualquer modalidade olímpica. Seja você um atleta, um entusiasta dos esportes ou apenas alguém curioso, estamos aqui para fornecer o conhecimento que você precisa para se conectar ainda mais com a magia dos Jogos Olímpicos. Explore, aprenda e inspire-se!</p>
        <h3 class="text-3xl mb-2 text-gray-50">Como usar?</h3>
        <hr class="border-gray-500">
        <p class="mb-2 mt-3 text-gray-500 dark:text-gray-400">Usar nosso site é fácil! Você pode começar a explorar todas as informações sobre modalidades olímpicas imediatamente, sem precisar criar uma conta. Basta clicar em "Nova conversa" na barra de navegação na parte superior da tela e digitar sua pergunta, nossa inteligência artificial fornecerá a resposta que você precisa.</p>
        <p class="mb-2 mt-2 text-gray-500 dark:text-gray-400">No entanto, para um gerenciamento mais eficiente das suas preferências e acesso a funções exclusivas, recomendamos que você crie uma conta. Esse processo é gratuito e rápido, exigindo apenas um endereço de e-mail. Com sua conta, você poderá personalizar sua experiência e obter recomendações personalizadas.</p>
        <p class="mb-5 mt-2 text-gray-500 dark:text-gray-400">Para criar uma conta, clique no botão "Minha conta" no canto superior direito da página. Em poucos minutos, você estará pronto para aproveitar todas as vantagens que nosso site tem a oferecer, basta seguir as intruções!</p>
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